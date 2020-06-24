import React from 'react';
import { Header, IHeader } from '../header-module';
import { Footer } from '../footer-module';

export interface IPage {
    children: React.ReactNode;
    headerProps: IHeader;
}

export const Page = (props: IPage): React.ReactElement => {
  return (
    <div>
      <Header {...props.headerProps} />
      { props.children }
      <Footer />
    </div>
  );
};
