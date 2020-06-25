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
      <Header {...props.headerProps} />
      <div>
        { props.children }
      </div>
      <Footer className="page-footer" />
    </div>
  );
};
