import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import findIndex from 'lodash/findIndex';
import ReactRouterPropTypes from 'react-router-prop-types';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TaskWorkspace from './TaskWorkspace';
import TaskModel from '../../../../../../../models/Task';
import { updateTask } from '../actions';

class TaskWorkspaceContainer extends Component {
  closeTaskWorkspace = () => {
    const { history, boardId } = this.props;
    history.replace(`/boards/${boardId}`);
  };

  toggleLabel = (clickedLabelId) => {
    const { task, onUpdateTask } = this.props;
    const taskLabelsIds = get(task, 'labels', []);
    const taskId = get(task, '_id');

    const labelIndex = findIndex(taskLabelsIds, labelId => labelId === clickedLabelId);

    if (labelIndex > -1) {
      const newLabelsIds = { labels: taskLabelsIds.filter(labelId => labelId !== clickedLabelId) };
      onUpdateTask(taskId, newLabelsIds);
    } else {
      const newLabelsIds = { labels: [...taskLabelsIds, clickedLabelId] };
      onUpdateTask(taskId, newLabelsIds);
    }
  };

  isLabelActive = (labelId) => {
    const { task } = this.props;
    const taskLabelsIds = get(task, 'labels', []);

    return taskLabelsIds.indexOf(labelId) > -1;
  };

  render() {
    const { task, columnNames } = this.props;

    return !!task && (
      <TaskWorkspace
        closeTaskWorkspace={this.closeTaskWorkspace}
        task={task}
        columnNames={columnNames}
        toggleLabel={this.toggleLabel}
        isLabelActive={this.isLabelActive}
      />
    );
  }
}

TaskWorkspaceContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  task: TaskModel,
  boardId: PropTypes.string,
  columnNames: PropTypes.shape(),
  onUpdateTask: PropTypes.func.isRequired,
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

function mapDispatchToProps(dispatch) {
  return {
    onUpdateTask: (taskId, newData) => dispatch(updateTask(taskId, newData)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskWorkspaceContainer));
