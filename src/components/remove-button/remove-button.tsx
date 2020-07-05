import React from 'react';
import './remove-button.css';

export const RemoveButton = React.memo((props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} className="square-button remove-button" />
));
