import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { withRouter, Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import c from 'classnames';

import './Task.css';
import TaskLabels from './components/TaskLabels';

const Task = ({
  task, index, boardId,
}) => (
  <Draggable
    draggableId={task._id}
    index={index}
  >
    {(providedDraggable, snapshot) => (
      <Link to={`/boards/${boardId}/${task._id}`}>
        <div
          className={c('task', { 'is-dragged': snapshot.isDragging })}
          ref={providedDraggable.innerRef}
          {...providedDraggable.draggableProps}
          {...providedDraggable.dragHandleProps}
        >
          <p>{task.title}</p>
          <TaskLabels task={task} />
        </div>
      </Link>
    )}
  </Draggable>
);

Task.propTypes = {
  task: PropTypes.shape().isRequired,
  index: PropTypes.number.isRequired,
  boardId: PropTypes.string.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};
Task.defaultProps = {};

export default withRouter(Task);
