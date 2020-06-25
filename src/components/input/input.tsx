import React from 'react';
import './input.css';

enum EColors {
  Green = 'input-green',
  Yellow = 'input-yellow',
  Error = 'input-error',
}

type TInputProps = {
  placeholder: string;
  error?: boolean;
  yellow?: boolean;
  green?: boolean;
};

export const Input = React.memo(({
  placeholder,
  error,
  yellow,
  green,
}: TInputProps) => (
  <input
    className={`input ${error ? EColors.Error : ''} ${yellow ? EColors.Yellow : ''} ${green ? EColors.Green : ''}`}
    placeholder={placeholder}
  />
));
