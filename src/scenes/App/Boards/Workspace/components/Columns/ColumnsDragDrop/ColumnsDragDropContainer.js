import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import ColumnModel from '../../../../../../../models/Column';
import ColumnsDragDrop from './ColumnsDragDrop';
import { updateColumnOrder } from '../actions';

class ColumnsDragDropContainer extends Component {
  onDragEnd = (dragEvent) => {
    const { columnsOrder, onUpdateColumnsOrder, boardId } = this.props;
    const { source, destination, type } = dragEvent;

    if (!destination || type !== 'COLUMN') {
      return;
    }

    const newColumnsOrder = Array.from(columnsOrder);
    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    const [removed] = newColumnsOrder.splice(sourceIndex, 1);
    newColumnsOrder.splice(destinationIndex, 0, removed);

    onUpdateColumnsOrder(boardId, newColumnsOrder);
  };

  render() {
    const { columns } = this.props;

    return (
      <ColumnsDragDrop
        columns={columns}
        onDragEnd={this.onDragEnd}
      />
    );
  }
}

ColumnsDragDropContainer.propTypes = {
  columns: PropTypes.arrayOf(ColumnModel),
  columnsOrder: PropTypes.arrayOf(PropTypes.string),
  onUpdateColumnsOrder: PropTypes.func.isRequired,
  boardId: PropTypes.string,
};
ColumnsDragDropContainer.defaultProps = {
  columns: [],
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

export default connect(mapStateToProps, mapDispatchToProps)(ColumnsDragDropContainer);
