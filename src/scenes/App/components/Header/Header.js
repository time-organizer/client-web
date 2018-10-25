import React from 'react';
import logo from '../../../../images/logo.svg';
import UserPanel from './UserPanel';
import MenuButton from './MenuButton';

import './Header.css';

const Header = () => (
  <header className="header">
    <MenuButton />
    <div className="header-logo">
      <img src={logo} alt="time organizer logo" />
    </div>
    <UserPanel />
  </header>
);

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
