import React from 'react';
import './save-button.css';

export const SaveButton = React.memo((props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} className="square-button save-button" />
));
