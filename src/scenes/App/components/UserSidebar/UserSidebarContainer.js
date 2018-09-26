import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleUserSidebar } from '../../../generalActions';
import UserSidebar from './UserSidebar';

const UserSidebarContainer = ({ userSidebarOpened, onToggleUserSidebar, name }) => (
  <UserSidebar
    onToggleUserSidebar={onToggleUserSidebar}
    userSidebarOpened={userSidebarOpened}
    name={name}
  />
);

UserSidebarContainer.propTypes = {
  onToggleUserSidebar: PropTypes.func.isRequired,
  userSidebarOpened: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

UserSidebarContainer.defaultProps = {
  userSidebarOpened: false,
};

function mapStateToProps({ general: { userSidebarOpened } }) {
  return {
    userSidebarOpened,
    name: 'Michał',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleUserSidebar: () => dispatch(toggleUserSidebar()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSidebarContainer);
