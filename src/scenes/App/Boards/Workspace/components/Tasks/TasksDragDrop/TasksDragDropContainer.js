import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TasksDragDrop from './TasksDragDrop';
import TaskModel from '../../../../../../../models/Task';

const TasksDragDropContainer = ({ tasks, columnId, boardId }) => (
  <TasksDragDrop
    tasks={tasks}
    columnId={columnId}
    boardId={boardId}
  />
);

TasksDragDropContainer.propTypes = {
  tasks: PropTypes.arrayOf(TaskModel).isRequired,
  columnId: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired,
};
TasksDragDropContainer.defaultProps = {};

function mapStateToProps({
  boards: {
    workspace: {
      tasks: { data: { entries } },
      board: { data: { _id: boardId } },
    },
  },
}, ownProps) {
  const { tasksOrder } = ownProps;
  const tasks = tasksOrder.map(taskId => entries[taskId]);

  return {
    tasks,
    boardId,
  };
}

export default connect(mapStateToProps)(TasksDragDropContainer);
