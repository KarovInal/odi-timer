import { curry } from 'lodash';

export const tasksToPercents = curry((
  great: number,
  normal: number,
  bad: number,
): [number, number, number] => {
  const all = great + normal + bad;

  return [
    (great * 100) / all,
    (normal * 100) / all,
    (bad * 100) / all,
  ];
});
