import React from 'react';
import { connect } from 'react-redux';

import TaskModel from '../../../../../../../models/Task';
import Task from './Task';

const TaskContainer = ({ task }) => (
  <Task task={task} />
);

TaskContainer.propTypes = {
  task: TaskModel.isRequired,
};
TaskContainer.defaultProps = {};

function mapStateToProps({ boards: { workspace: { tasks: { data: { entries } } } } }, ownProps) {
  const { taskId } = ownProps;

  return {
    task: entries[taskId],
  };
}

export default connect(mapStateToProps)(TaskContainer);
