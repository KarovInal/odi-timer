import max from 'lodash/max';

const sum = (a: number, b: number) => a - b > 0 ? a - b : 0;

export const msToPercent = (optimisticTime: number, pessimisticTime: number, finalTime: number):[number, number, number] => {
  const pX = sum(pessimisticTime, optimisticTime);
  const fX = sum(finalTime, pX + optimisticTime);

  const maxValue = max([optimisticTime, pessimisticTime, finalTime]);

  const fin = ((fX / maxValue) * 100) || 0;
  const pes = ((pX / maxValue) * 100) || 0;
  const opt = ((optimisticTime / maxValue) * 100) || 0;

  return [opt, pes, fin];
};
