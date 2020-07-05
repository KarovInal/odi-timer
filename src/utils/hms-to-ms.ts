import replace from 'lodash/replace';
import padStart from 'lodash/padStart';
import toNumber from 'lodash/toNumber';

export const hmsToMs = (hms: string | undefined = '00:00:00'): number => {
  hms = padStart(replace(hms, /:/g, ''), 6, '0');
  const hours = toNumber(hms.slice(0, 2)) * 60 * 60 * 1000;
  const minutes = toNumber(hms.slice(2, 4)) * 60 * 1000;
  const seconds = toNumber(hms.slice(4, 6)) * 1000;

  return hours + minutes + seconds;
};
