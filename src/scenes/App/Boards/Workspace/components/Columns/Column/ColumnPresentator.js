import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import NewTask from '../../Tasks/NewTask';
import TasksDragDrop from '../../Tasks/TasksDragDrop';
import ColumnModel from '../../../../../../../models/Column';

import './Column.css';

const ColumnPresentator = ({ column, providedDraggable, onSwitchOnColumnEditor }) => (
  <Fragment>
    <div className="column">
      <div
        className="column-title"
        {...providedDraggable.dragHandleProps}
      >
        {column.title}
      </div>
      <div className="column-edit-button" onClick={onSwitchOnColumnEditor}>
        <i className="icon-logo" />
      </div>
      <TasksDragDrop columnId={column._id} tasksOrder={column.tasksOrder} />
    </div>
    <NewTask columnId={column._id} />
  </Fragment>
);

ColumnPresentator.propTypes = {
  column: ColumnModel.isRequired,
  providedDraggable: PropTypes.shape().isRequired,
  onSwitchOnColumnEditor: PropTypes.func.isRequired,
};
ColumnPresentator.defaultProps = {};

export default ColumnPresentator;
