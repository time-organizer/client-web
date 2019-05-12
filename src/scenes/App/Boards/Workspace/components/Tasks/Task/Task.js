import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import c from 'classnames';

import './Task.css';

const Task = ({
  task, index, boardId, history,
}) => (
  <Draggable
    draggableId={task._id}
    index={index}
  >
    {(providedDraggable, snapshot) => (
      <div
        onClick={() => history.push(`/boards/${boardId}/${task._id}`)}
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
  boardId: PropTypes.string.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};
Task.defaultProps = {};

export default withRouter(Task);
