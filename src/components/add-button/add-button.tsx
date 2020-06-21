import React from 'react';
import './add-button.css';

const AddButton = React.memo((props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} className="square-button add-button" />
));

export default AddButton;
