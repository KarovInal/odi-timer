import { v4 } from 'uuid';
import { EControl, ITaskItem } from './tasks-types';
import { CREATE_TASK, REMOVE_TASK, UPDATE_TASK, INCREASE_TIME, UPDATE_CONTROL } from './tasks-constants';

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
