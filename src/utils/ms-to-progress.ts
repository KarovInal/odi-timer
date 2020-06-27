const keep100 = (n: number) => n > 100 ? 100 : n;

export const msToProgress = (optimisticTime: number, pessimisticTime: number, finalTime: number) => {
  if(optimisticTime > pessimisticTime) {
    console.warn('Not correct values');
    return [0, 0, 0];
  }

  if(finalTime >= pessimisticTime) {
    return [100, 100];
  }

  if(finalTime <= optimisticTime) {
    const optimisticProgress = keep100((finalTime / optimisticTime) * 100);

    return [optimisticProgress, 0];
  }

  const defTimes = pessimisticTime - optimisticTime;
  const pessimisticProgress = keep100(((finalTime - optimisticTime) / defTimes) * 100);

  return [100, pessimisticProgress];
};
