import React from 'react';
import PropTypes from 'prop-types';

import './UserSidebar.css';
import { CSSTransition } from 'react-transition-group';

const UserSidebar = ({ userSidebarOpened, onToggleUserSidebar }) => (
  <CSSTransition
    in={userSidebarOpened}
    timeout={300}
    classNames="user-sidebar-transition"
    unmountOnExit
    onExited={() => {
    }}
  >
    <div className="user-sidebar">
      <div onClick={onToggleUserSidebar}>close</div>
    </div>
  </CSSTransition>
);

UserSidebar.propTypes = {
  userSidebarOpened: PropTypes.bool,
  onToggleUserSidebar: PropTypes.func.isRequired,
};
UserSidebar.defaultProps = {
  userSidebarOpened: false,
};

export default UserSidebar;
