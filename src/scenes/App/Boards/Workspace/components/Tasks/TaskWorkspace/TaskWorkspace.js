import React from 'react';
import PropTypes from 'prop-types';

import { Popup } from '../../../../../../common_components';
import TaskModel from '../../../../../../../models/Task';

import './TaskWorkspace.css';
import TaskDescription from './components/TaskDescription/TaskDescription';
import TaskHistory from './components/TaskHistory';
import TaskSettings from './components/TaskSettings/TaskSettings';

const TaskWorkspace = ({
  closeTaskWorkspace,
  task,
  columnNames,
  toggleLabel,
}) => (
  <Popup
    onClose={closeTaskWorkspace}
    title={task.title}
  >
    <div className="task-workspace">
      <div className="task-content">
        <TaskDescription task={task} />
        <TaskHistory
          task={task}
          columnNames={columnNames}
        />
      </div>
      <div className="task-settings">
        <TaskSettings
          task={task}
          toggleLabel={toggleLabel}
        />
      </div>
    </div>
  </Popup>
);

TaskWorkspace.propTypes = {
  closeTaskWorkspace: PropTypes.func.isRequired,
  task: TaskModel,
  columnNames: PropTypes.shape(),
  toggleLabel: PropTypes.func.isRequired,
};
TaskWorkspace.defaultProps = {
  task: null,
  columnNames: {},
};

export default TaskWorkspace;
