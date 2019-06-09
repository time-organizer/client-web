import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header3 from '../../../../../../../common_components/Texts/Header3';
import TaskModel from '../../../../../../../../models/Task';

import './TaskHistory.css';
import TaskHistoryListItem from './TaskHistoryListItem';

const TaskHistory = ({ task, columnNames }) => (
  <Fragment>
    <Header3 withMargin>
      History
    </Header3>
    <div className="tasks-history-wrapper">
      {task.history.map((historyEntry, index) => (
        <TaskHistoryListItem
          key={index} // eslint-disable-line
          updatedAt={historyEntry.updatedAt}
          columnName={columnNames[historyEntry.columnId]}
        />
      ))}
      <TaskHistoryListItem
        type="add"
        updatedAt={task.createdAt}
      />
    </div>
  </Fragment>
);

TaskHistory.propTypes = {
  task: TaskModel.isRequired,
  columnNames: PropTypes.shape(),
};
TaskHistory.defaultProps = {
  columnNames: {},
};

export default TaskHistory;
