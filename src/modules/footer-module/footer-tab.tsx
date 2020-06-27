import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Location } from 'history';
import { RouteComponentProps } from 'react-router';

interface IFooterTabProps extends RouteComponentProps {
  label: string;
  activeLink: string;
}

const getTabIsActive = (location: Location, activeLink: string) =>
  location.pathname.includes(activeLink)
    ? 'footer-tab-active'
    : '';

const FooterTabComponent = React.memo(({
  label,
  location,
  activeLink,
}: IFooterTabProps) => (
  <Link to={activeLink} className={`${getTabIsActive(location, activeLink)} footer-tab`}>
    {label}
  </Link>
));

export const FooterTab = withRouter(FooterTabComponent);
