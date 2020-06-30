import React from 'react';
import './p14.css';

type TP14Props = {
  children: React.ReactNode;
};

export const P14 = React.memo<TP14Props>(({ children }) => (
  <p className="p14">{children}</p>
));
