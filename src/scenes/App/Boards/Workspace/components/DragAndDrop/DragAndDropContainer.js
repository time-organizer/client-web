import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { connect } from 'react-redux';

import { DragDropContext } from 'react-beautiful-dnd';
import { updateColumn, updateColumnOrder } from '../Columns/actions';
import ColumnsDragDrop from '../Columns/ColumnsDragDrop';

class DragAndDropContainer extends Component {
  onDragEnd = (dragEvent) => {
    const { source, destination, type } = dragEvent;

    if (!destination) {
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

  handleTasksDnD = (dragEvent) => {
    const { columnsEntries, onUpdateColumn } = this.props;
    const { source, destination } = dragEvent;
    const { droppableId: columnSourceId, index: indexSource } = source;
    const { droppableId: columnDestinationId, index: indexDestination } = destination;

    if (!columnsEntries[columnSourceId] || !columnsEntries[columnDestinationId]) {
      console.warn('Something is wrong with columns entries'); // eslint-disable-line
      return;
    }

    const tasksOrderSource = columnsEntries[columnSourceId].tasksOrder;
    const tasksOrderDestination = columnsEntries[columnDestinationId].tasksOrder;

    if (!tasksOrderSource || !tasksOrderDestination) {
      console.warn('Something is wrong with tasksOrders'); // eslint-disable-line
      return;
    }

    if (columnSourceId === columnDestinationId) {
      const newTasksOrder = Array.from(tasksOrderSource);

      const [removed] = newTasksOrder.splice(indexSource, 1);
      newTasksOrder.splice(indexDestination, 0, removed);
      onUpdateColumn(columnSourceId, { tasksOrder: newTasksOrder });
      return;
    }

    const newTasksOrderSource = Array.from(tasksOrderSource);
    const newTasksOrderDestination = Array.from(tasksOrderDestination);

    const [removed] = newTasksOrderSource.splice(indexSource, 1);
    newTasksOrderDestination.splice(indexDestination, 0, removed);
    onUpdateColumn(columnSourceId, { tasksOrder: newTasksOrderSource });
    onUpdateColumn(columnDestinationId, { tasksOrder: newTasksOrderDestination });
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
  columnsEntries: PropTypes.shape(),
  onUpdateColumn: PropTypes.func.isRequired,
};
DragAndDropContainer.defaultProps = {
  columnsOrder: [],
  boardId: '',
  columnsEntries: {},
};

function mapStateToProps({ boards: { workspace: { board, columns } } }) {
  const boardId = get(board, 'data._id');
  const columnsEntries = get(columns, 'data.entries', {});
  const columnsOrder = get(columns, 'data.columnsOrder', []);

  return {
    columnsEntries,
    columnsOrder,
    boardId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUpdateColumnsOrder: (boardId, newOrder) => dispatch(updateColumnOrder(boardId, newOrder)),
    onUpdateColumn: (columnId, newData) => dispatch(updateColumn(columnId, newData)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DragAndDropContainer);
