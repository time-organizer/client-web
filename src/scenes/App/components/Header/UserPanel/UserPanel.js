import React from 'react';
import PropTypes from 'prop-types';

import './UserPanel.css';

const UserPanel = ({ onToggleUserSidebar, name }) => (
  <div className="user-panel">
    <div className="user-panel-name">
      {name}
    </div>
    <div className="user-panel-avatar">
      <div className="user-panel-avatar-wrapper" onClick={onToggleUserSidebar}>
        <i className="icon-user" />
      </div>
    </div>
  </div>
);

UserPanel.propTypes = {
  onToggleUserSidebar: PropTypes.func.isRequired,
  name: PropTypes.string,
};

UserPanel.defaultProps = {
  name: '',
};

export default UserPanel;
