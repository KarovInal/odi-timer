import React from 'react';
import './helper-text.css';

interface IHelperTextProps {
  children: React.ReactNode
}

export const HelperText = React.memo<IHelperTextProps>(({ children }: IHelperTextProps) => (
  <p className='page-content-helper-text'>{ children }</p>
));
