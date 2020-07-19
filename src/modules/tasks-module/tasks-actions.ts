import {v4} from 'uuid';
import {getTaskById} from '@/selectors/tasks-selectors';
import {EControl, EStatus, ITaskItem} from './tasks-types';
import {CREATE_TASK, INCREASE_TIME, REMOVE_TASK, UPDATE_CONTROL, UPDATE_TASK} from './tasks-constants';

interface IPayload<T> {
  type: string;
  payload: T
}

export const createTask = (data: ITaskItem): IPayload<ITaskItem> => ({
  type: CREATE_TASK,
  payload: {
    id: v4(),
    ...data
  }
});

export const removeTask = (id: string): IPayload<{ id: string }> => ({
  type: REMOVE_TASK,
  payload: {
    id
  }
});

export const updateTask = (id: string, data: ITaskItem): IPayload<{ id: string, data: ITaskItem }> => ({
  type: UPDATE_TASK,
  payload: {
    id,
    data
  }
});

export const updateTaskStatus = (id: string) => (dispatch: (args: any) => any, getState: () => any) => {
  const state = getState();
  const taskData = getTaskById(id)(state);

  if(taskData?.control !== EControl.finished) {
    return dispatch(updateTask(id, { status: EStatus.none }));
  }

  if(taskData?.finalTime <= taskData.optimisticTime ) {
    return dispatch(updateTask(id, { status: EStatus.great }));
  }

  if(taskData?.finalTime > taskData?.optimisticTime && taskData?.finalTime <= taskData?.pessimisticTime) {
    return dispatch(updateTask(id, { status: EStatus.normal }));
  }

  if(taskData?.finalTime > taskData?.pessimisticTime) {
    return dispatch(updateTask(id, { status: EStatus.bad }));
  }
};

export const increaseTime = (id: string, step: number) => ({
  type: INCREASE_TIME,
  payload: {
    id,
    step
  }
});

export const updateControl = (id: string, control: EControl) => ({
  type: UPDATE_CONTROL,
  payload: {
    id,
    control
  }
});
