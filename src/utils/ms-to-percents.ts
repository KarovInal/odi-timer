export const msToPercent = (optimisticTime: number, pessimisticTime: number, finalTime: number) => {
  if(optimisticTime > pessimisticTime) {
    console.warn('Not correct values');
    return [0, 0, 0];
  }

  if (finalTime < pessimisticTime) {
    const optimisticPercent = (optimisticTime / pessimisticTime) * 100;
    const pessimisticPercent = 100 - optimisticPercent;

    return [optimisticPercent, pessimisticPercent, 0];
  }

  const optimisticPercent = (optimisticTime / finalTime) * 100;
  const pessimisticPercent = ((pessimisticTime / finalTime) * 100) - optimisticPercent;
  const finalPercent = 100 - (pessimisticPercent + optimisticPercent);

  return [optimisticPercent, pessimisticPercent, finalPercent];
};
