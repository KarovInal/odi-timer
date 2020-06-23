import React from 'react';
import './back-button-styles.css';

export const BackButton = React.memo((props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button {...props} className="square-button back-button" />
));
