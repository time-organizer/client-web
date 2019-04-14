import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import { CloseButton } from '../../../common_components';
import Fade from '../../../common_components/transitions/Fade';

import './MenuSidebar.css';

const MenuSidebar = ({
  menuSidebarOpened, onToggleMenuSidebar,
}) => (
  <Fragment>
    <Fade trigger={menuSidebarOpened}>
      <div className="menu-sidebar-overlay" onClick={onToggleMenuSidebar} />
    </Fade>
    <CSSTransition
      in={menuSidebarOpened}
      timeout={300}
      classNames="menu-sidebar-transition"
      unmountOnExit
    >
      <div className="menu-sidebar">
        <CloseButton onClose={onToggleMenuSidebar} />
      </div>
    </CSSTransition>
  </Fragment>
);

MenuSidebar.propTypes = {
  menuSidebarOpened: PropTypes.bool,
  onToggleMenuSidebar: PropTypes.func.isRequired,
};
MenuSidebar.defaultProps = {
  menuSidebarOpened: false,
};

export default MenuSidebar;
