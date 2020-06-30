import React from 'react';
import './p12bold.css';

type TP12BoldProps = {
  children: React.ReactNode;
};

export const P12Bold = React.memo(({ children }: TP12BoldProps) => (
  <p className="p12bold">{children}</p>
));
