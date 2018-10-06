import React from 'react';

import NewBoard from '../NewBoard';

import './BoardsList.css';

const BoardsList = () => (
  <div className="boards-list">
    <NewBoard />
  </div>
);

BoardsList.propTypes = {};
BoardsList.defaultProps = {};

export default BoardsList;
