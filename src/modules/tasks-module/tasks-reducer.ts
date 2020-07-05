import omit from 'lodash/omit';
import { ITaskItem } from './tasks-types';
import { CREATE_TASK, REMOVE_TASK, UPDATE_TASK } from './tasks-constants';

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
