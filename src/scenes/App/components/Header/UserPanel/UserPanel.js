import React from 'react';

import './UserPanel.css';

const UserPanel = () => (
  <div className="user-panel">
    <div className="header-button">
      <i className="icon-bell-o" />
    </div>
    <div className="user-panel-avatar">
      <div className="user-panel-avatar-wrapper">
        <i className="icon-user" />
      </div>
    </div>
    <div className="user-panel-name">
      Michał
    </div>
  </div>
);

export default UserPanel;
