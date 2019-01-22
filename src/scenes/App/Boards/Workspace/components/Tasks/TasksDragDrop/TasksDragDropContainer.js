import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TasksDragDrop from './TasksDragDrop';

const TasksDragDropContainer = ({ tasks, columnId }) => (
  <TasksDragDrop tasks={tasks} columnId={columnId} />
);

TasksDragDropContainer.propTypes = {
  tasks: PropTypes.shape().isRequired,
  columnId: PropTypes.string.isRequired,
};
TasksDragDropContainer.defaultProps = {};

function mapStateToProps({ boards: { workspace: { tasks: { data: { entries } } } } }, ownProps) {
  const { tasksOrder } = ownProps;
  const tasks = tasksOrder.map(taskId => entries[taskId]);

  return {
    tasks,
  };
}

export default connect(mapStateToProps)(TasksDragDropContainer);
