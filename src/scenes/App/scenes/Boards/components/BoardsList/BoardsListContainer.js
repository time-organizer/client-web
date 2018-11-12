import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { withRouter } from 'react-router-dom';

import BoardsList from './BoardsList';
import { fetchBoardsIfNeeded } from '../../actions';
import BoardModel from '../../../../../../models/Board';

class BoardsListContainer extends Component {
  componentDidMount() {
    const { refreshBoards } = this.props;
    refreshBoards();
  }

  render() {
    const { boards, isFetching } = this.props;

    return (
      <BoardsList boards={boards} isFetching={isFetching} />
    );
  }
}

BoardsListContainer.propTypes = {
  refreshBoards: PropTypes.func.isRequired,
  boards: PropTypes.arrayOf(BoardModel),
  isFetching: PropTypes.bool,
};
BoardsListContainer.defaultProps = {
  boards: [],
  isFetching: false,
};

function mapStateToProps({ boards: { list: { flatBoardsById, isFetching } } }) {
  const boards = map(flatBoardsById, board => board);

  return {
    boards,
    isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    refreshBoards: () => dispatch(fetchBoardsIfNeeded()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardsListContainer));
