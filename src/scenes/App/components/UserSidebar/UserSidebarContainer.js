import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleUserSidebar } from '../../../generalActions';
import UserSidebar from './UserSidebar';

const UserSidebarContainer = ({ userSidebarOpened, onToggleUserSidebar }) => (
  <UserSidebar
    onToggleUserSidebar={onToggleUserSidebar}
    userSidebarOpened={userSidebarOpened}
  />
);

UserSidebarContainer.propTypes = {
  onToggleUserSidebar: PropTypes.func.isRequired,
  userSidebarOpened: PropTypes.bool,
};

UserSidebarContainer.defaultProps = {
  userSidebarOpened: false,
};

function mapStateToProps({ general: { userSidebarOpened } }) {
  return {
    userSidebarOpened,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleUserSidebar: () => dispatch(toggleUserSidebar()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSidebarContainer);
