import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import ColumnModel from '../../../../../../../models/Column';
import ColumnsDragDrop from './ColumnsDragDrop';

class ColumnsDragDropContainer extends Component {
  onDragEnd = (a) => {
    // TODO columns reordering logic
    console.log(a); // eslint-disable-line
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
};
ColumnsDragDropContainer.defaultProps = {
  columns: [],
};

function mapStateToProps({ boards: { workspace: { columns } } }) {
  const entries = get(columns, 'data.entries', {});
  const columnsOrder = get(columns, 'data.columnsOrder', []);

  const orderedColumns = columnsOrder.map(columnId => entries[columnId]);
  return {
    columns: orderedColumns,
    columnsOrder,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ColumnsDragDropContainer);
