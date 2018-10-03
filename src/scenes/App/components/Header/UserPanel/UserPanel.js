import React from 'react';
import PropTypes from 'prop-types';
import AssetPreviewer from '../../../../components/AssetPreviewer';
import AssetModel from '../../../../../models/Asset';

import './UserPanel.css';

const UserPanel = ({ onToggleUserSidebar, name, avatar }) => (
  <div className="user-panel">
    <div className="user-panel-name">
      {name}
    </div>
    <div className="user-panel-avatar">
      <div className="user-panel-avatar-wrapper" onClick={onToggleUserSidebar}>
        {avatar
          ? <AssetPreviewer asset={avatar} />
          : <i className="icon-user" />
        }
      </div>
    </div>
  </div>
);

UserPanel.propTypes = {
  onToggleUserSidebar: PropTypes.func.isRequired,
  name: PropTypes.string,
  avatar: AssetModel.propTypes,
};

UserPanel.defaultProps = {
  name: '',
  avatar: null,
};

export default UserPanel;
