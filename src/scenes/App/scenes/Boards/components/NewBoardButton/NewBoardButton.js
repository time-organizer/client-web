import React from 'react';
import PropTypes from 'prop-types';

import './NewBoard.css';
import '../BoardListItem/BoardListItem.css';

const NewBoardButton = ({ onToggleNewBoardForm }) => (
  <div className="board-list-item-wrapper">
    <div className="new-board-button board-list-item" onClick={onToggleNewBoardForm}>
      <i className="icon-add" />
    </div>
  </div>
);

NewBoardButton.propTypes = {
  onToggleNewBoardForm: PropTypes.func.isRequired,
};
NewBoardButton.defaultProps = {};

export default NewBoardButton;
