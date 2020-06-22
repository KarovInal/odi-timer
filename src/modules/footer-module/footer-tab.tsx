import React from 'react';
import { withRouter } from 'react-router-dom';
import { Location } from 'history';
import { RouteComponentProps } from 'react-router';

interface IFooterTabProps extends RouteComponentProps {
  label: string;
  activeLink: string;
}

const getTabIsActive = (location: Location, activeLink: string) =>
  location.pathname === activeLink
    ? 'footer-tab-active'
    : ''

const FooterTabComponent = React.memo<IFooterTabProps>(({
  label,
  location,
  activeLink,
}) => {
  console.log('location', location, 11);
  return (
    <div className={[getTabIsActive(location, activeLink), 'footer-tab'].join(' ')}>
      {label}
    </div>
  );
});

export const FooterTab = withRouter(FooterTabComponent);
