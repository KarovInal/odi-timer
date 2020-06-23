import React from 'react';
import './add-button.css';

export const AddButton = React.memo((props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} className="square-button add-button" />
));
