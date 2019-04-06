import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import ColumnPresentator from '../Column';
import NewColumnForm from '../NewColumnForm/NewColumnFormContainer';
import ColumnModel from '../../../../../../../models/Column';

import './ColumnsDragDrop.css';

class ColumnsDragDrop extends Component {
  render() {
    const { columns } = this.props;

    return (
      <Droppable
        droppableId="droppable-columns"
        direction="horizontal"
        type="COLUMN"
      >
        {providedDroppable => (
          <div
            className="droppable-columns-wrapper"
            {...providedDroppable.droppableProps}
            ref={providedDroppable.innerRef}
          >
            {columns.map((column, index) => (
              <ColumnPresentator
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
