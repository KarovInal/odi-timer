import omit from 'lodash/omit';
import { EControl, ITaskItem } from './tasks-types';
import { CREATE_TASK, INCREASE_TIME, REMOVE_TASK, UPDATE_CONTROL, UPDATE_TASK } from './tasks-constants';

export interface ITasksReducer {
  [key: string]: ITaskItem
}

export const tasksReducer = (state: ITasksReducer = {}, action: any) => {
  switch (action.type) {
  case CREATE_TASK:
    return {
      ...state,
      [action.payload.id]: {...action.payload}
    };
  case REMOVE_TASK:
    return omit(state, action.payload);
  case UPDATE_CONTROL: {
    const taskId = action?.payload?.id ?? '';

    if(action?.payload?.control === EControl.replay) {
      return {
        ...state,
        [taskId]: {
          ...state?.[taskId] ?? {},
          control: EControl.pause,
          finalTime: 0,
        }
      };
    }

    return {
      ...state,
      [taskId]: {
        ...state?.[taskId] ?? {},
        control: action?.payload?.control
      }
    };
  }
  case INCREASE_TIME: {
    const taskId = action?.payload?.id ?? '';
    const currentTime = state?.[taskId]?.finalTime ?? 0;

    return {
      ...state,
      [taskId]: {
        ...state?.[taskId] ?? {},
        finalTime: currentTime + action?.payload?.step ?? 0
      }
    };
  }
  case UPDATE_TASK: {
    const taskId = action?.payload?.id ?? '';

    return {
      ...state,
      [taskId]: {
        ...state?.[taskId] ?? {},
        ...(action?.payload?.data ?? {}),
      }
    };
  }
  default:
    return state;
  }
};
