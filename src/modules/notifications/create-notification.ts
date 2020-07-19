export const createNotification = (
  title = 'Time!',
  {
    body = 'Odi timer - Notification',
    ...restOptions
  }: NotificationOptions = {}) => {

  const myNotification = new Notification(title, {
    body,
    ...restOptions,
  });

  return myNotification;
};
