import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import NewTask from '../../Tasks/NewTask';

import './Column.css';

const Column = ({ column, index }) => (
  <Draggable
    key={column._id}
    draggableId={column._id}
    index={index}
  >
    {providedDraggable => (
      <div
        className="column-wrapper"
        ref={providedDraggable.innerRef}
        {...providedDraggable.draggableProps}
      >
        <div className="column">
          <div
            className="column-title"
            {...providedDraggable.dragHandleProps}
          >
            {column.title}
          </div>
        </div>
        <NewTask columnId={column._id} />
      </div>
    )}
  </Draggable>
);

Column.propTypes = {
  column: PropTypes.shape({}).isRequired,
  index: PropTypes.number.isRequired,
};
Column.defaultProps = {};

export default Column;
