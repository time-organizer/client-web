import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import ColumnModel from '../../../../../../../models/Column';
import ColumnsDragDrop from './ColumnsDragDrop';
import { updateColumnOrder } from '../actions';

const ColumnsDragDropContainer = ({ columns }) => (
  <ColumnsDragDrop
    columns={columns}
  />
);

ColumnsDragDropContainer.propTypes = {
  columns: PropTypes.arrayOf(ColumnModel),
};
ColumnsDragDropContainer.defaultProps = {
  columns: [],
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
