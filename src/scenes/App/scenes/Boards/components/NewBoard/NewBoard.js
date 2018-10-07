import React from 'react';

import './NewBoard.css';
import '../BoardListItem/BoardListItem.css';

const NewBoard = () => (
  <div className="board-list-item-wrapper">
    <div className="new-board-button board-list-item">
      <i className="icon-add" />
    </div>
  </div>
);

NewBoard.propTypes = {};
NewBoard.defaultProps = {};

export default NewBoard;
