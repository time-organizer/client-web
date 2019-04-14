import React from 'react';
import PropTypes from 'prop-types';
import AssetModel from '../../../../../models/Asset';

import { Icon, iconNames, AssetPreviewer } from '../../../../common_components';

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
          : <Icon name={iconNames.user} />
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
