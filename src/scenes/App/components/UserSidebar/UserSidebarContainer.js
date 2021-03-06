import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { toggleUserSidebar } from '../../../generalActions';
import UserSidebar from './UserSidebar';
import { userLogout } from './actions';

const UserSidebarContainer = ({
  userSidebarOpened, onUserLogout, onToggleUserSidebar, name,
}) => (
  <UserSidebar
    onToggleUserSidebar={onToggleUserSidebar}
    userSidebarOpened={userSidebarOpened}
    name={name}
    onUserLogout={onUserLogout}
  />
);

UserSidebarContainer.propTypes = {
  onToggleUserSidebar: PropTypes.func.isRequired,
  onUserLogout: PropTypes.func.isRequired,
  userSidebarOpened: PropTypes.bool,
  name: PropTypes.string,
};

UserSidebarContainer.defaultProps = {
  userSidebarOpened: false,
  name: '',
};

function mapStateToProps({ general: { userSidebarOpened }, user: { profile } }) {
  const name = _.get(profile, 'name', '');

  return {
    userSidebarOpened,
    name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleUserSidebar: () => dispatch(toggleUserSidebar()),
    onUserLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSidebarContainer);
