import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import ReactRouterPropTypes from 'react-router-prop-types';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TaskWorkspace from './TaskWorkspace';

class TaskWorkspaceContainer extends Component {
  closeTaskWorkspace = () => {
    const { history, boardId } = this.props;
    history.replace(`/boards/${boardId}`);
  };

  render() {
    return (
      <TaskWorkspace closeTaskWorkspace={this.closeTaskWorkspace} />
    );
  }
}

TaskWorkspaceContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  boardId: PropTypes.string,
};
TaskWorkspaceContainer.defaultProps = {
  boardId: '',
};

function mapStateToProps({ boards: { workspace: { board: { data: boardData } } } }) {
  const boardId = get(boardData, '_id');

  return {
    boardId,
  };
}

export default withRouter(connect(mapStateToProps)(TaskWorkspaceContainer));
