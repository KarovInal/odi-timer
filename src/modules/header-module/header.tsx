import React from 'react';
import BackButton from "../../components/back-button";
import { APP_NAME } from '../../constants/general-constants';
import SettingButton from '../../components/setting-button/setting-button';
import './header-styles.css';

interface IHeader {
    title?: string;
    ableToBack?: boolean;
}

const Header = ({ title = APP_NAME, ableToBack = false }: IHeader) => {
    return (
        <div className='header-wrap'>
            { ableToBack && <BackButton style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} /> }
            <label className='header-title'>{title}</label>
            <SettingButton />
        </div>
    );
};

export default Header;
