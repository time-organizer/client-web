import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const TaskHistoryListItem = ({ updatedAt, columnName, type }) => (
  <div className="task-history-list-item">
    {type === 'change' && (
      <Fragment>
        <span className="task-history-list-item-date">
          {moment(updatedAt).calendar()}
        </span>
        {' '}
        status changed to
        {' '}
        <span className="text-bold">{columnName}</span>
      </Fragment>
    )}
    {type === 'add' && (
      <Fragment>
        Task was added
        {' '}
        <span className="task-history-list-item-date">
          {moment(updatedAt).calendar()}
        </span>
      </Fragment>
    )}
  </div>
);

TaskHistoryListItem.propTypes = {
  updatedAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  columnName: PropTypes.string,
  type: PropTypes.oneOf(['add', 'change']),
};
TaskHistoryListItem.defaultProps = {
  type: 'change',
  columnName: '',
};

export default TaskHistoryListItem;
