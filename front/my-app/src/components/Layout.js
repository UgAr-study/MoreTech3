import React, {useEffect} from 'react';
import {NavBar} from "./NavBar";
import {Main} from "./Main";

const Layout = ({children}) => {

    return (
        <>
            <NavBar/>
            <Main>
                {children}
            </Main>
        </>
    );
};

export default Layout;
