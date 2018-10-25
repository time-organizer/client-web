import React from 'react';
import PropTypes from 'prop-types';

const MenuButton = ({ onToggleMenuSidebar }) => (
  <div className="header-button" onClick={onToggleMenuSidebar}>
    <i className="icon-thumbnails" />
  </div>
);

MenuButton.propTypes = {
  onToggleMenuSidebar: PropTypes.func.isRequired,
};

export default MenuButton;
