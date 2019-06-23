import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../../common_components';
import Header3 from '../../../common_components/Texts/Header3';

const SidebarButton = ({ onClick, name, iconName }) => (
  <div className="sidebar-button clickable" onClick={onClick}>
    <div className="sidebar-button-icon">
      {iconName && (
        <Icon name={iconName} />
      )}
    </div>
    <div className="sidebar-button-name">
      <Header3>{name}</Header3>
    </div>
  </div>
);

SidebarButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  iconName: PropTypes.string,
};
SidebarButton.defaultProps = {
  iconName: '',
};

export default SidebarButton;
