import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import c from 'classnames';

import './Task.css';

const Task = ({ task, index }) => (
  <Draggable
    draggableId={task._id}
    index={index}
  >
    {(providedDraggable, snapshot) => (
      <div
        className={c('task', { 'is-dragged': snapshot.isDragging })}
        ref={providedDraggable.innerRef}
        {...providedDraggable.draggableProps}
        {...providedDraggable.dragHandleProps}
      >
        <p>{task.title}</p>
      </div>
    )}
  </Draggable>
);

Task.propTypes = {
  task: PropTypes.shape().isRequired,
  index: PropTypes.number.isRequired,
};
Task.defaultProps = {};

export default Task;
