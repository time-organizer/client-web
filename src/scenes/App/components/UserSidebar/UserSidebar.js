import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import './UserSidebar.css';

import Avatar from './components/Avatar';

const UserSidebar = ({ userSidebarOpened, onToggleUserSidebar, name }) => (
  <CSSTransition
    in={userSidebarOpened}
    timeout={300}
    classNames="user-sidebar-transition"
    unmountOnExit
  >
    <div className="user-sidebar">
      <div className="user-sidebar-close" onClick={onToggleUserSidebar}>
        <i className="icon-cancel" />
      </div>
      <Avatar name={name} />
    </div>
  </CSSTransition>
);

UserSidebar.propTypes = {
  userSidebarOpened: PropTypes.bool,
  onToggleUserSidebar: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
UserSidebar.defaultProps = {
  userSidebarOpened: false,
};

export default UserSidebar;
