import React from 'react';
import { Header, IHeader } from "../header-module";

export interface IPage {
    children: React.ReactNode;
    headerProps: IHeader;
}

export const Page = (props: IPage) => {
    return (
        <div>
            <Header {...props.headerProps} />
            { props.children }
            {/*<Footer/>*/}
        </div>
    );
};
