import React from 'react';
import './setting-button-styles.css';
import { useHistory } from 'react-router-dom';
import { PREFERENCES_PATH } from '@/constants/paths';

export const SettingButton = React.memo((props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const history = useHistory();

  const onClick = React.useCallback(() => {
    history.push(PREFERENCES_PATH);
  }, []);

  return (
    <button
      {...props}
      className="square-button setting-button"
      onClick={onClick}
    />
  );
});
