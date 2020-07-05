import clamp from 'lodash/clamp';

export const msToProgress = (optimisticTime: number, pessimisticTime: number, finalTime: number): [number, number] => {
  if(finalTime <= optimisticTime) {
    const optimisticProgress = clamp((finalTime / optimisticTime) * 100, 0, 100);

    return [optimisticProgress, 0];
  }

  const defTimes = pessimisticTime - optimisticTime;
  const pessimisticProgress = clamp(((finalTime - optimisticTime) / defTimes) * 100, 0, 100);

  return [100, pessimisticProgress];
};
