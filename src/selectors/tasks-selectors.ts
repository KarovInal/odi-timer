import filter from 'lodash/filter';
import { createSelector } from 'reselect';
import { EControl, ITaskItem, ITasksReducer } from '@/modules/tasks-module';

export const getTasks = (state: any):ITasksReducer => state?.tasks ?? {};

export const getTaskById = (taskId: string) => (state: any) => {
  const taskData = getTasks(state);

  return taskData?.[taskId] ?? {};
};

export const getActiveTasks = createSelector(
  getTasks,
  tasks => filter(tasks, (task: ITaskItem) => task.control !== EControl.finished)
);
