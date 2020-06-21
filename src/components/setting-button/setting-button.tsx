import React from 'react';
import './setting-button-styles.css';

const SettingButton = React.memo((props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button {...props} className="square-button setting-button" />
));

export default SettingButton;
