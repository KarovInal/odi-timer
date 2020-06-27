import React from 'react';
import { FooterTab } from './footer-tab';
import { STATISTIC_PATH, TIMER_PATH } from '@/constants/paths';
import './footer.css';

export const Footer = React.memo(() => (
  <div className="footer">
    <FooterTab activeLink={TIMER_PATH} label="Timer" />
    <FooterTab activeLink={STATISTIC_PATH} label="Statistic" />
  </div>
));
