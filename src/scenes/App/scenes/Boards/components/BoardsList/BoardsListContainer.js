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
    const { boards } = this.props;

    return (
      <BoardsList boards={boards} />
    );
  }
}

BoardsListContainer.propTypes = {
  refreshBoards: PropTypes.func.isRequired,
  boards: PropTypes.arrayOf(BoardModel),
};
BoardsListContainer.defaultProps = {
  boards: [],
};

function mapStateToProps({ boards: { flatBoardsById } }) {
  const boards = map(flatBoardsById, board => board);

  return {
    boards,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    refreshBoards: () => dispatch(fetchBoardsIfNeeded()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardsListContainer));
