import React from 'react';
import logo from '../../../../images/logo.svg';
import UserPanel from './UserPanel';

import './Header.css';

const Header = () => (
  <header className="header">
    <div className="header-button">
      <i className="icon-thumbnails" />
    </div>
    <div className="header-logo">
      <img src={logo} alt="time organizer logo" />
    </div>
    <UserPanel />
  </header>
);

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
