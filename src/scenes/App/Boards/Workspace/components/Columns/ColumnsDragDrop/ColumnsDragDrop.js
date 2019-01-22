import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import c from 'classnames';

import Column from '../Column';
import NewColumnForm from '../NewColumnForm/NewColumnFormContainer';
import ColumnModel from '../../../../../../../models/Column';

import './ColumnsDragDrop.css';

class ColumnsDragDrop extends Component {
  render() {
    const { columns, onDragEnd } = this.props;

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="droppable-columns"
          direction="horizontal"
          type="COLUMN"
        >
          {(providedDroppable, snapshot) => (
            <div
              className={c('droppable-columns-wrapper',
                { 'dragging-over': snapshot.isDraggingOver })
              }

              {...providedDroppable.droppableProps}
              ref={providedDroppable.innerRef}
            >
              {columns.map((column, index) => (
                <Column
                  key={column._id}
                  index={index}
                  column={column}
                />
              ))}
              {providedDroppable.placeholder}
              <NewColumnForm />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

ColumnsDragDrop.propTypes = {
  columns: PropTypes.arrayOf(ColumnModel),
  onDragEnd: PropTypes.func.isRequired,
};

ColumnsDragDrop.defaultProps = {
  columns: [],
};

export default ColumnsDragDrop;
