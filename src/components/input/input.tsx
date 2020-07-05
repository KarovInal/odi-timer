import React from 'react';
import MaskInput, { Props as MaskInputProps } from 'react-input-mask';
import './input.css';

enum EColors {
  Green = 'input-green',
  Yellow = 'input-yellow',
  Error = 'input-error',
}

interface TInputProps extends MaskInputProps {
  label?: string;
  error?: boolean;
  yellow?: boolean;
  green?: boolean;
}

export const Input = React.memo(({
  error,
  label = '',
  yellow,
  green,
  className= '',
  ...props
}: TInputProps) => (
  <div className={className}>
    <MaskInput
      {...props}
      className={`input ${error ? EColors.Error : ''} ${yellow ? EColors.Yellow : ''} ${green ? EColors.Green : ''}`}
    />
    <label className={`input-label ${error ? 'input-label_error' : ''}`}>{label}</label>
  </div>
));
