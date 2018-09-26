import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { toggleUserSidebar } from '../../../generalActions';
import { fetchUserIfNeeded } from './actions';
import UserSidebar from './UserSidebar';

class UserSidebarContainer extends Component {
  componentDidMount() {
    const { refreshUser } = this.props;

    refreshUser();
  }

  render() {
    const { userSidebarOpened, onToggleUserSidebar, name } = this.props;

    return (
      <UserSidebar
        onToggleUserSidebar={onToggleUserSidebar}
        userSidebarOpened={userSidebarOpened}
        name={name}
      />
    );
  }
}

UserSidebarContainer.propTypes = {
  onToggleUserSidebar: PropTypes.func.isRequired,
  userSidebarOpened: PropTypes.bool,
  name: PropTypes.string,
  refreshUser: PropTypes.func.isRequired,
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
    refreshUser: () => dispatch(fetchUserIfNeeded()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSidebarContainer);
