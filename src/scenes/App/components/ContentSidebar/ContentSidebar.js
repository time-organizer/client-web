import React from 'react';
import get from 'lodash/get';
import { BoardModel } from '../../../../models/Board';

import './ContentSidebar.css';

const ContentSidebar = ({ board }) => {
  const title = get(board, 'title');

  return (
    <div className="content-sidebar">
      <h1 className="sidebar-board-title">{title}</h1>
    </div>
  );
};

ContentSidebar.propTypes = {
  board: BoardModel.isRequired,
};
ContentSidebar.defaultProps = {};

export default ContentSidebar;
