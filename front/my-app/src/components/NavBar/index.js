import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavBarElements';

function Navbar () {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Marketplace
          </NavLink>
          <NavLink to='/favorite' activeStyle>
            Favorite
          </NavLink>
          <NavLink to='/downloaded' activeStyle>
            Downloaded
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;