import { REMOVE_COUNTER, OPTIMISTIC_NOTICED, PESSIMISTIC_NOTICED } from './counter-constants';

export const removeCounter = (taskId: string) => ({
  type: REMOVE_COUNTER,
  payload: {
    taskId
  }
});

export const optimisticNoticed = (taskId: string) => ({
  type: OPTIMISTIC_NOTICED,
  payload: {
    taskId
  }
});

export const pessimisticNoticed = (taskId: string) => ({
  type: PESSIMISTIC_NOTICED,
  payload: {
    taskId
  }
});
