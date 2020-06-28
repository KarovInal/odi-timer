import React from 'react';
import { Header, IHeader } from '../header-module';
import { Footer } from '../footer-module';
import './page.css';

export interface IPageProps {
    children?: React.ReactNode;
    headerProps: IHeader;
    textHelper: string;
}

export const Page = ({
  headerProps,
  children,
  textHelper,
}: IPageProps): React.ReactElement => {
  return (
    <div className="page">
      <Header className="page-header" {...headerProps} />
      <div className="page-content">
        { children ?? <p className="page-content-helper-text">{textHelper}</p> }
      </div>
      <Footer className="page-footer" />
    </div>
  );
};
