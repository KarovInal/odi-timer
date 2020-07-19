import { REMOVE_COUNTER, PESSIMISTIC_NOTICED, OPTIMISTIC_NOTICED } from './counter-constants';

interface ICounterState {
  [key: string]: {
    optimisticNoticed: boolean;
    pessimisticNoticed: boolean;
  }
}

export const counterReducer = (state: ICounterState = {}, action: any) => {
  switch (action.type) {
  case REMOVE_COUNTER:
    // eslint-disable-next-line no-case-declarations
    const {[action?.payload?.taskId]: _, ...nextState} = state;

    return nextState;
  case PESSIMISTIC_NOTICED: {
    const taskData = state?.[action?.payload?.taskId] ?? {
      optimisticNoticed: false,
      pessimisticNoticed: true,
    };

    return {
      ...state,
      [action?.payload?.taskId]: {
        ...taskData,
        pessimisticNoticed: true,
      }
    };
  }
  case OPTIMISTIC_NOTICED: {
    const taskData = state?.[action?.payload?.taskId] ?? {
      optimisticNoticed: true,
      pessimisticNoticed: false,
    };

    return {
      ...state,
      [action?.payload?.taskId]: {
        ...taskData,
        optimisticNoticed: true
      }
    };
  }
  default: return state;
  }
};
