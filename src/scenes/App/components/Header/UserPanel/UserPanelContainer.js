import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleUserSidebar } from '../../../../generalActions';
import UserPanel from './UserPanel';

const UserPanelContainer = ({ onToggleUserSidebar }) => (
  <UserPanel onToggleUserSidebar={onToggleUserSidebar} />
);

UserPanelContainer.propTypes = {
  onToggleUserSidebar: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onToggleUserSidebar: () => dispatch(toggleUserSidebar()),
  };
}

export default connect(null, mapDispatchToProps)(UserPanelContainer);
