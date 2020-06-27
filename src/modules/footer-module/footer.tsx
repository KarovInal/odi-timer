import React from 'react';
import { FooterTab } from './footer-tab';
import { STATISTIC_PATH, TIMER_PATH } from '@/constants/paths';
import './footer.css';

type TFooterProps = {
  className: string | void,
}

export const Footer = React.memo(({ className = '' }: TFooterProps) => (
  <div className={`${className} footer`}>
    <FooterTab activeLink={TIMER_PATH} label="Timer" />
    <FooterTab activeLink={STATISTIC_PATH} label="Statistic" />
  </div>
));
