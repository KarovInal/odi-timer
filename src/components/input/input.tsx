import React from 'react';
import './input.css';

type TInputProps = {
  placeholder: string,
};

export const Input = React.memo<TInputProps>((props) => (
  <input className="input" placeholder={props.placeholder}/>
));
