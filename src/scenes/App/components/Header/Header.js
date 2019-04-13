import React from 'react';
import Icon from '../../../components/Icon';
import UserPanel from './UserPanel';
import MenuButton from './MenuButton';

import './Header.css';

const Header = () => (
  <header className="header">
    <MenuButton />
    <div className="header-logo">
      <Icon name="logo" />
    </div>
    <UserPanel />
  </header>
);

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
