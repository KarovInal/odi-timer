import React from 'react';
import Header, { IHeader } from "../header-module";

export interface IPage {
    children: React.ReactNode;
    headerProps: IHeader;
}

const Page = (props: IPage) => {
    return (
        <div>
            <Header {...props.headerProps} />
            { props.children }
            {/*<Footer/>*/}
        </div>
    );
};

export default Page;
