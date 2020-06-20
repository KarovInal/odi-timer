import * as React from 'react';
import './add-button.css';

export const AddButton = React.memo((props) => (
  <button {...props} className="add-button">+</button>
));
