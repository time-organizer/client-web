import React from 'react';

import NewBoardButton from '../NewBoardButton';

import './BoardsList.css';

const BoardsList = () => (
  <div className="boards-list">
    <NewBoardButton />
  </div>
);

BoardsList.propTypes = {};
BoardsList.defaultProps = {};

export default BoardsList;
