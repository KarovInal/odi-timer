import { v4 } from 'uuid';
import { ITaskItem } from './tasks-types';
import { CREATE_TASK, REMOVE_TASK, UPDATE_TASK } from './tasks-constants';

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

export const removeTask = (id: string): IPayload<string> => ({
  type: REMOVE_TASK,
  payload: id
});

export const updateTask = (id: string, data: ITaskItem): IPayload<{ id: string, data: ITaskItem }> => ({
  type: UPDATE_TASK,
  payload: {
    id,
    data
  }
});
