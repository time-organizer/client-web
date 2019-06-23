import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { toggleMenuSidebar } from '../../../generalActions';
import MenuSidebar from './MenuSidebar';

const MenuSidebarContainer = ({
  menuSidebarOpened, onToggleMenuSidebar, boardId,
}) => (
  <MenuSidebar
    onToggleMenuSidebar={onToggleMenuSidebar}
    menuSidebarOpened={menuSidebarOpened}
    boardId={boardId}
  />
);

MenuSidebarContainer.propTypes = {
  onToggleMenuSidebar: PropTypes.func.isRequired,
  menuSidebarOpened: PropTypes.bool,
  boardId: PropTypes.string,
};

MenuSidebarContainer.defaultProps = {
  menuSidebarOpened: false,
  boardId: '',
};

function mapStateToProps({
  general: { menuSidebarOpened },
  boards: { workspace: { board } },
}) {
  const boardId = get(board, 'data._id');

  return {
    menuSidebarOpened,
    boardId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleMenuSidebar: () => dispatch(toggleMenuSidebar()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuSidebarContainer);
