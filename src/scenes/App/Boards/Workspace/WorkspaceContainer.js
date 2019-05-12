import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Workspace from './Workspace';
import { fetchBoardIfNeeded } from './actions';
import { BoardModel } from '../../../../models/Board';

class WorkspaceContainer extends Component {
  componentDidMount() {
    const { refreshBoard, match: { params } } = this.props;

    refreshBoard(params.id);
  }

  render() {
    const { match: { params }, boardData } = this.props;
    const properBoardLoaded = get(boardData, '_id') === params.id;

    return boardData && properBoardLoaded && (
      <Workspace board={boardData} />
    );
  }
}

WorkspaceContainer.propTypes = {
  match: PropTypes.shape({}).isRequired,
  boardData: BoardModel,
  refreshBoard: PropTypes.func.isRequired,
};
WorkspaceContainer.defaultProps = {
  boardData: null,
};

function mapStateToProps({ boards: { workspace: { board } } }) {
  const boardData = board.data;

  return {
    board,
    boardData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    refreshBoard: id => dispatch(fetchBoardIfNeeded(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceContainer);
