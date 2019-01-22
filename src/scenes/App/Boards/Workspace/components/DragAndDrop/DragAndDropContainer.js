import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { connect } from 'react-redux';

import { DragDropContext } from 'react-beautiful-dnd';
import { updateColumnOrder } from '../Columns/actions';
import ColumnsDragDrop from '../Columns/ColumnsDragDrop';

class DragAndDropContainer extends Component {
  onDragEnd = (dragEvent) => {
    const { source, destination, type } = dragEvent;

    if (!destination || type !== 'COLUMN') {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    if (type === 'COLUMN') {
      this.handleColumnsDnD(dragEvent);
    }

    if (type === 'TASK') {
      this.handleTasksDnD(dragEvent);
    }
  };

  handleColumnsDnD = (dragEvent) => {
    const { columnsOrder, onUpdateColumnsOrder, boardId } = this.props;
    const { source, destination } = dragEvent;

    const newColumnsOrder = Array.from(columnsOrder);
    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    const [removed] = newColumnsOrder.splice(sourceIndex, 1);
    newColumnsOrder.splice(destinationIndex, 0, removed);

    onUpdateColumnsOrder(boardId, newColumnsOrder);
  };

  handleTasksDnD = () => {

  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <ColumnsDragDrop />
      </DragDropContext>
    );
  }
}

DragAndDropContainer.propTypes = {
  columnsOrder: PropTypes.arrayOf(PropTypes.string),
  onUpdateColumnsOrder: PropTypes.func.isRequired,
  boardId: PropTypes.string,
};
DragAndDropContainer.defaultProps = {
  columnsOrder: [],
  boardId: '',
};

function mapStateToProps({ boards: { workspace: { board, columns } } }) {
  const boardId = get(board, 'data._id');
  const entries = get(columns, 'data.entries', {});
  const columnsOrder = get(columns, 'data.columnsOrder', []);

  const orderedColumns = columnsOrder.map(columnId => entries[columnId]);
  return {
    columns: orderedColumns,
    columnsOrder,
    boardId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateColumnsOrder: (boardId, newOrder) => dispatch(updateColumnOrder(boardId, newOrder)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DragAndDropContainer);
