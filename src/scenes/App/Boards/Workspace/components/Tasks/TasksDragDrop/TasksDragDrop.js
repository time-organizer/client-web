import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import c from 'classnames';

import Task from '../Task';
import TaskModel from '../../../../../../../models/Task';

import './TasksDragDrop.css';

const TasksDragDrop = ({ tasks, columnId, boardId }) => (
  <Droppable
    droppableId={columnId}
    type="TASK"
  >
    {(provided, snapshot) => (
      <div
        className={c('droppable-tasks-wrapper',
          { 'dragging-over': snapshot.isDraggingOver })
        }
        {...provided.droppableProps}
        ref={provided.innerRef}
      >
        {tasks.map((task, index) => (
          <Task
            key={task._id}
            task={task}
            index={index}
            boardId={boardId}
          />
        ))}
      </div>
    )}
  </Droppable>
);

TasksDragDrop.propTypes = {
  tasks: PropTypes.arrayOf(TaskModel).isRequired,
  columnId: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired,
};
TasksDragDrop.defaultProps = {};

export default TasksDragDrop;
