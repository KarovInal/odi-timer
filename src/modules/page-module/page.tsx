import React from 'react';
import { Header, IHeader } from '../header-module';
import { Footer } from '../footer-module';
import './page.css';

export interface IPageProps {
    children?: React.ReactNode;
    headerProps: IHeader;
}

export const Page = ({
  headerProps,
  children,
}: IPageProps): React.ReactElement => {
  return (
    <div className="page">
      <Header className="page-header" {...headerProps} />
      <div className="page-content">
        { children }
      </div>
      <Footer className="page-footer" />
    </div>
  );
};
