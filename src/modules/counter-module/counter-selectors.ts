import { COUNTER_STORE_KEY } from './counter-constants';

export const getCounterState = (state: any) => state[COUNTER_STORE_KEY];

export const getCounterStateByTaskId = (taskId: string) => (state: any) => getCounterState(state)?.[taskId] ?? {};
