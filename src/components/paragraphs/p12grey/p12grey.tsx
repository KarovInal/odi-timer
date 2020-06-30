import React from 'react';
import './p12grey.css';

type TP14Props = {
  children: React.ReactNode;
};

export const P12Grey = React.memo<TP14Props>(({ children }) => (
  <p className="p12grey">{children}</p>
));
