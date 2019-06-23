import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import { CloseButton } from '../../../common_components';
import Fade from '../../../common_components/transitions/Fade';

import './MenuSidebar.css';
import SidebarButton from './SidebarButton';

class MenuSidebar extends Component {
  redirectToBoardsList = () => {
    const { history, onToggleMenuSidebar } = this.props;
    history.replace('/boards');
    onToggleMenuSidebar();
  };

  redirectToDashboard = () => {
    const { history, boardId, onToggleMenuSidebar } = this.props;
    history.replace(`/boards/${boardId}/dashboard`);
    onToggleMenuSidebar();
  };

  redirectToBoard = () => {
    const { history, boardId, onToggleMenuSidebar } = this.props;
    history.replace(`/boards/${boardId}`);
    onToggleMenuSidebar();
  };

  render() {
    const {
      menuSidebarOpened, onToggleMenuSidebar, boardId,
    } = this.props;

    return !!boardId && (
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
            <SidebarButton
              onClick={this.redirectToBoardsList}
              name="Back to list"
            />
            <SidebarButton
              onClick={this.redirectToDashboard}
              name="Dashboard"
            />
            <SidebarButton
              onClick={this.redirectToBoard}
              name="Board"
            />
          </div>
        </CSSTransition>
      </Fragment>
    );
  }
}

MenuSidebar.propTypes = {
  menuSidebarOpened: PropTypes.bool,
  onToggleMenuSidebar: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  boardId: PropTypes.string,
};
MenuSidebar.defaultProps = {
  menuSidebarOpened: false,
  boardId: '',
};

export default withRouter(MenuSidebar);
