import clamp from 'lodash/clamp';

export const msToProgress = (optimisticTime: number, pessimisticTime: number, finalTime: number) => {
  if(optimisticTime > pessimisticTime) {
    console.warn('Not correct values');
    return [0, 0, 0];
  }

  if(finalTime >= pessimisticTime) {
    return [100, 100];
  }

  if(finalTime <= optimisticTime) {
    const optimisticProgress = clamp((finalTime / optimisticTime) * 100, 0, 100);

    return [optimisticProgress, 0];
  }

  const defTimes = pessimisticTime - optimisticTime;
  const pessimisticProgress = clamp(((finalTime - optimisticTime) / defTimes) * 100, 0, 100);

  return [100, pessimisticProgress];
};
