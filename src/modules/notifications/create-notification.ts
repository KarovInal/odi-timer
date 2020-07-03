import { noop } from 'lodash';

export const createNotification = (
  title = 'Time!',
  {
    body = 'Odi timer - Notification',
    ...restOptions
  }: NotificationOptions = {},
  callback: () => void = noop) => {

  const myNotification = new Notification(title, {
    body,
    ...restOptions,
  });

  myNotification.onclick = callback;
};
