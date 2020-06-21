import React, {CSSProperties} from 'react';
import { useHistory } from 'react-router-dom';
import BackButton from "../../components/back-button";
import { APP_NAME } from '../../constants/general-constants';
import SettingButton from '../../components/setting-button/setting-button';
import './header-styles.css';

export interface IHeader {
    title?: string;
    ableToBack?: boolean;
}

const getBackButtonStyle = (ableToBack: boolean): CSSProperties => ({
    backgroundColor: 'rgba(0, 0, 0, 0)',
    visibility: ableToBack ? 'visible' : 'hidden',
});

const Header = ({ title = APP_NAME, ableToBack = false }: IHeader) => {
    const history = useHistory();

    const handleBackButton = () => {
        ableToBack && history.goBack();
    };

    return (
        <div className='header-wrap'>
            <BackButton style={getBackButtonStyle(ableToBack)} onClick={handleBackButton} />
            <label className='header-title'>{title}</label>
            <SettingButton />
        </div>
    );
};

export default Header;
