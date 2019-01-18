import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Workspace from './Workspace';
import { clearWorkspace, fetchBoardIfNeeded } from './actions';

class WorkspaceContainer extends Component {
  componentWillMount() {
    const { match: { params }, boardData, onClearWorkspace } = this.props;
    if (boardData && (get(boardData, '_id') !== params.id)) {
      onClearWorkspace();
    }
  }

  componentDidMount() {
    const { refreshBoard, match: { params } } = this.props;

    refreshBoard(params.id);
  }

  render() {
    const { boardData } = this.props;
    return (
      <Workspace boardData={boardData} />
    );
  }
}

WorkspaceContainer.propTypes = {
  match: PropTypes.shape({}).isRequired,
  boardData: PropTypes.shape({}), // TODO add board model
  refreshBoard: PropTypes.func.isRequired,
  onClearWorkspace: PropTypes.func.isRequired,
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
    onClearWorkspace: () => dispatch(clearWorkspace()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceContainer);
