import React from 'react';
import { Header, IHeader } from '../header-module';
import { Footer } from '../footer-module';
import './page.css';

export interface IPage {
    children: React.ReactNode;
    headerProps: IHeader;
}

export const Page = (props: IPage): React.ReactElement => {
  return (
    <div className="page">
      <Header className="page-header" {...props.headerProps} />
      <div className="page-content">
        { props.children }
      </div>
      <Footer className="page-footer" />
    </div>
  );
};
