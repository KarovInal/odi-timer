import React from 'react';
import { Header, IHeader } from '../header-module';
import { Footer } from '../footer-module';
import './page.css';

export interface IPageProps {
    children?: React.ReactNode;
    headerProps: IHeader;
    textHelper?: string;
}

export const Page = ({
  headerProps,
  children,
  textHelper,
}: IPageProps): React.ReactElement => {
  const content = children
    ? children
    : Boolean(textHelper) && <p className="page-content-helper-text">{textHelper}</p>;

  return (
    <div className="page">
      <Header className="page-header" {...headerProps} />
      <div className="page-content">
        { content }
      </div>
      <Footer className="page-footer" />
    </div>
  );
};
