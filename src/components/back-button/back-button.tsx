import React from 'react';
import './back-button-styles.css';

const BackButton = React.memo((props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button {...props} className="square-button back-button" />
));

export default BackButton;
