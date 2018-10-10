import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import Logout from './components/Logout';
import Avatar from './components/Avatar';
import CloseButton from '../../../components/CloseButton';
import Fade from '../../../components/transitions/Fade';

import './UserSidebar.css';

const UserSidebar = ({
  userSidebarOpened, onToggleUserSidebar, name,
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
        <Logout />
      </div>
    </CSSTransition>
  </Fragment>
);

UserSidebar.propTypes = {
  userSidebarOpened: PropTypes.bool,
  onToggleUserSidebar: PropTypes.func.isRequired,
  name: PropTypes.string,
};
UserSidebar.defaultProps = {
  userSidebarOpened: false,
  name: '',
};

export default UserSidebar;
