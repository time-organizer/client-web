import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { withRouter } from 'react-router-dom';

import BoardsList from './BoardsList';
import { fetchBoardsIfNeeded } from '../sagas';
import { BoardModel } from '../../../../../models/Board';

class BoardsListContainer extends Component {
  componentDidMount() {
    fetchBoardsIfNeeded();
  }

  render() {
    const { boards, isFetching } = this.props;

    return (
      <BoardsList boards={boards} isFetching={isFetching} />
    );
  }
}

BoardsListContainer.propTypes = {
  boards: PropTypes.arrayOf(BoardModel),
  isFetching: PropTypes.bool,
};
BoardsListContainer.defaultProps = {
  boards: [],
  isFetching: false,
};

function mapStateToProps({ boards: { list: { boardsById, isFetching } } }) {
  const boards = map(boardsById, board => board);

  return {
    boards,
    isFetching,
  };
}

export default withRouter(connect(mapStateToProps)(BoardsListContainer));
