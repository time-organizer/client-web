import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import ReactRouterPropTypes from 'react-router-prop-types';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TaskWorkspace from './TaskWorkspace';
import TaskModel from '../../../../../../../models/Task';

class TaskWorkspaceContainer extends Component {
  closeTaskWorkspace = () => {
    const { history, boardId } = this.props;
    history.replace(`/boards/${boardId}`);
  };

  render() {
    const { task } = this.props;

    return !!task && (
      <TaskWorkspace
        closeTaskWorkspace={this.closeTaskWorkspace}
        task={task}
      />
    );
  }
}

TaskWorkspaceContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  task: TaskModel,
  boardId: PropTypes.string,
};
TaskWorkspaceContainer.defaultProps = {
  boardId: '',
  task: null,
};

function mapStateToProps({
  boards: {
    workspace: {
      board: { data: boardData },
      tasks: { data: { entries: tasksEntries } },
    },
  },
}, ownProps) {
  const { match: { params: { taskId } } } = ownProps;

  const task = get(tasksEntries, taskId);
  const boardId = get(boardData, '_id');

  return {
    boardId,
    task,
  };
}

export default withRouter(connect(mapStateToProps)(TaskWorkspaceContainer));
