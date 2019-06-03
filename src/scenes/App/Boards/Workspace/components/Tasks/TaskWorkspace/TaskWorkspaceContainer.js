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
    const { task, columnNames } = this.props;

    return !!task && (
      <TaskWorkspace
        closeTaskWorkspace={this.closeTaskWorkspace}
        task={task}
        columnNames={columnNames}
      />
    );
  }
}

TaskWorkspaceContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  task: TaskModel,
  boardId: PropTypes.string,
  columnNames: PropTypes.shape(),
};
TaskWorkspaceContainer.defaultProps = {
  boardId: '',
  task: null,
  columnNames: {},
};

function mapStateToProps({
  boards: {
    workspace: {
      board: { data: boardData },
      tasks: { data: { entries: tasksEntries } },
      columns: { data: { entries: columnsEntries } },
    },
  },
}, ownProps) {
  const { match: { params: { taskId } } } = ownProps;

  const task = get(tasksEntries, taskId);
  const columnNames = get(task, 'history', [])
    .reduce((prevValue, currValue) => ({
      ...prevValue,
      [currValue.columnId]:
        get(columnsEntries, `[${currValue.columnId}].title`, 'Column no longer exists'),
    }), {});
  const boardId = get(boardData, '_id');

  return {
    boardId,
    task,
    columnNames,
  };
}

export default withRouter(connect(mapStateToProps)(TaskWorkspaceContainer));
