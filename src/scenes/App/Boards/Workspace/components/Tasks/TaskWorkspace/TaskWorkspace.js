import React from 'react';
import PropTypes from 'prop-types';

import { Popup } from '../../../../../../common_components';
import TaskModel from '../../../../../../../models/Task';

const TaskWorkspace = ({ closeTaskWorkspace, task }) => (
  <Popup onClose={closeTaskWorkspace} title={task.title} />
);

TaskWorkspace.propTypes = {
  closeTaskWorkspace: PropTypes.func.isRequired,
  task: TaskModel,
};
TaskWorkspace.defaultProps = {
  task: {},
};

export default TaskWorkspace;
