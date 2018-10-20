import React from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';

import NewBoardButton from '../NewBoardButton';
import BoardListItem from '../BoardListItem';
import BoardModel from '../../../../../../models/Board';

import './BoardsList.css';

const BoardsList = ({ boards }) => (
  <div className="boards-list">
    <NewBoardButton />
    {map(boards, board => (
      <BoardListItem
        key={board._id}
        board={board}
      />
    ))}
  </div>
);

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(BoardModel),
};
BoardsList.defaultProps = {
  boards: [],
};

export default BoardsList;
