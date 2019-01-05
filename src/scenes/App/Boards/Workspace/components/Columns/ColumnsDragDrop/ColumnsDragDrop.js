import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Column from '../Column';

import './ColumnsDragDrop.css';
import NewColumnForm from '../NewColumnForm/NewColumnFormContainer';
import ColumnModel from '../../../../../../../models/Column';

class ColumnsDragDrop extends Component {
  render() {
    const { columns, columnsOrder, onDragEnd } = this.props;

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
              {columnsOrder.map((columnId, index) => (
                <Column
                  key={columnId}
                  index={index}
                  column={columns[columnId]}
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
  onDragEnd: PropTypes.func.isRequired,
  columnsOrder: PropTypes.arrayOf(PropTypes.string),

};
ColumnsDragDrop.defaultProps = {
  columns: [],
  columnsOrder: [],
};

export default ColumnsDragDrop;
