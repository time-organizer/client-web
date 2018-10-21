import React from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import {
  TransitionGroup,
} from 'react-transition-group';

import NewBoardButton from '../NewBoardButton';
import BoardListItem from '../BoardListItem';
import BoardModel from '../../../../../../models/Board';
import Fade from '../../../../../components/transitions/Fade';

import './BoardsList.css';

const BoardsList = ({ boards }) => (
  <TransitionGroup className="boards-list">
    <NewBoardButton />
    {map(boards, board => (
      <Fade trigger>
        <BoardListItem
          key={board._id}
          board={board}
        />
      </Fade>
    ))}
  </TransitionGroup>
);

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(BoardModel),
};
BoardsList.defaultProps = {
  boards: [],
};

export default BoardsList;
