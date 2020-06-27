import padStart from 'lodash/padStart';

const MS_HOUR = 1000*60*60;
const MS_MINUTE = 1000*60;

export const msToHms = (duration: number) => {
  const hour = Math.floor(duration/(MS_HOUR)) + '';
  const minutes = Math.floor(duration/(MS_MINUTE)) % 60 + '';
  const seconds = Math.floor(duration/1000) % 60 + '';

  return `${padStart(hour, 2, '0')}:${padStart(minutes, 2, '0')}:${padStart(seconds, 2, '0')}`;
};
