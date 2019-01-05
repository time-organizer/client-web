import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from '../Column';

import './ColumnsDragDrop.css';
import NewColumnForm from '../NewColumnForm/NewColumnFormContainer';
import ColumnModel from '../../../../../../../models/Column';

class ColumnsDragDrop extends Component {
  render() {
    const { columns, onDragEnd } = this.props;

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="droppable-columns"
          direction="horizontal"
        >
          {providedDroppable => (
            <div
              className="droppable-columns-wrapper"
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
};
ColumnsDragDrop.defaultProps = {
  columns: [],
};

export default ColumnsDragDrop;
