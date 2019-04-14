import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import Logout from './components/Logout';
import Avatar from './components/Avatar';
import { CloseButton } from '../../../common_components';
import Fade from '../../../common_components/transitions/Fade';

import './UserSidebar.css';

const UserSidebar = ({
  userSidebarOpened, onUserLogout, onToggleUserSidebar, name,
}) => (
  <Fragment>
    <Fade trigger={userSidebarOpened}>
      <div className="user-sidebar-overlay" onClick={onToggleUserSidebar} />
    </Fade>

    <CSSTransition
      in={userSidebarOpened}
      timeout={300}
      classNames="user-sidebar-transition"
      unmountOnExit
    >
      <div className="user-sidebar">
        <CloseButton onClose={onToggleUserSidebar} />
        <Avatar />
        <div className="user-sidebar-message">
          {`Hello, ${name}`}
        </div>
        <Logout onUserLogout={onUserLogout} />
      </div>
    </CSSTransition>
  </Fragment>
);

UserSidebar.propTypes = {
  userSidebarOpened: PropTypes.bool,
  onUserLogout: PropTypes.func.isRequired,
  onToggleUserSidebar: PropTypes.func.isRequired,
  name: PropTypes.string,
};
UserSidebar.defaultProps = {
  userSidebarOpened: false,
  name: '',
};

export default UserSidebar;
