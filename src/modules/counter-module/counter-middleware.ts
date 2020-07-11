import { msToHms } from '@/utils/ms-to-hms';
import { getTaskById } from '@/selectors/tasks-selectors';
import { createNotification } from '@/modules/notifications';
import { getCounterStateByTaskId } from './counter-selectors';
import { getPreferences, EPreferencesFields } from '@/modules/preferences';
import { optimisticNoticed, pessimisticNoticed, removeCounter } from './counter-actions';
import {EControl, INCREASE_TIME, increaseTime, updateTaskStatus, REMOVE_TASK, UPDATE_CONTROL} from '@/modules/tasks-module';

interface ITimerIds {
  [key: string]: NodeJS.Timeout;
}

const timerIds: ITimerIds = {};

interface IAction {
  type: string;
  payload: {
    id?: string;
    step?: number;
    control?: EControl;
  }
}

const step = 1000;

interface IPending {
  [taskId: string]:  boolean
}

const pendingOptimisticNotification: IPending = {};
const pendingPessimisticNotification: IPending = {};

export const counterMiddleware = ({ dispatch, getState}: any) => (next: (params: any) => any) => (action: IAction) => {
  next(action);

  const state = getState();

  switch (action.type) {
  case INCREASE_TIME: {
    //Check, do we need notify or not
    const taskId = action?.payload?.id;
    const step = action?.payload?.step;
    const taskItem = getTaskById(taskId)(state);
    const preferences = getPreferences(state);
    const nextTime = (taskItem.finalTime ?? 0) + step;
    const optimisticTime = taskItem?.optimisticTime ?? 0;
    const pessimisticTime = taskItem?.pessimisticTime ?? 0;
    const counterData = getCounterStateByTaskId(taskId)(state);

    if(nextTime > optimisticTime && nextTime < pessimisticTime && !counterData?.optimisticNoticed && preferences[EPreferencesFields.Optimistic]) {
      // Notification for optimistic time
      if(!pendingOptimisticNotification?.[taskId]) {
        pendingOptimisticNotification[taskId] = true;

        const notification = createNotification(
          taskItem?.title ?? 'no title',
          {
            body: `Optimistic time ${msToHms(taskItem?.optimisticTime ?? 0)} has passed`,
          }
        );

        notification.onshow = () => delete pendingOptimisticNotification[taskId];
      }

      dispatch(optimisticNoticed(taskId));
    } else if(nextTime > pessimisticTime && !counterData?.pessimisticNoticed && preferences[EPreferencesFields.Pessimistic]) {
      // Notification for pessimistic time
      if(!pendingPessimisticNotification?.[taskId] ) {
        pendingPessimisticNotification[taskId] = true;

        const notification = createNotification(
          taskItem?.title ?? 'no title',
          {
            body: `Pessimistic time ${msToHms(taskItem?.pessimisticTime ?? 0)} has passed`,
          }
        );

        notification.onshow = () => delete pendingPessimisticNotification[taskId];
      }

      dispatch(pessimisticNoticed(taskId));
    }

    break;
  }
  case REMOVE_TASK: {
    const taskId = action?.payload?.id ?? '';
    clearInterval(timerIds[taskId]);
    timerIds[taskId] = null;

    break;
  }
  case UPDATE_CONTROL: {
    const taskId = action?.payload?.id;
    const control = action?.payload?.control;

    if(control === EControl.play) {
      if(!timerIds[taskId]) {
        timerIds[taskId] = setInterval(() => {
          dispatch(increaseTime(taskId, step));
        }, step);
      }
    }

    // Clear notification info for finished or replayed task
    if(action?.payload?.control === EControl.replay || action?.payload?.control === EControl.finished) {
      dispatch(removeCounter(taskId));
      dispatch(updateTaskStatus(taskId));
    }

    // Will stop counting time
    if(action?.payload?.control === EControl.pause || action?.payload?.control === EControl.replay || action?.payload?.control === EControl.finished) {
      clearInterval(timerIds[taskId]);
      timerIds[taskId] = null;
    }
  }
  }
};
