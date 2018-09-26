import React from 'react';
import PropTypes from 'prop-types';

import './UserPanel.css';

const UserPanel = ({ onToggleUserSidebar }) => (
  <div className="user-panel">
    <div className="header-button">
      <i className="icon-bell-o" />
    </div>
    <div className="user-panel-avatar" onClick={onToggleUserSidebar}>
      <div className="user-panel-avatar-wrapper">
        <i className="icon-user" />
      </div>
    </div>
    <div className="user-panel-name">
      Michał
    </div>
  </div>
);

UserPanel.propTypes = {
  onToggleUserSidebar: PropTypes.func.isRequired,
};

export default UserPanel;
