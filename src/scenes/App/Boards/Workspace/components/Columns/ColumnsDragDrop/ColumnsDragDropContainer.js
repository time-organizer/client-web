import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import ColumnsDragDrop from './ColumnsDragDrop';
import ColumnModel from '../../../../../../../models/Column';

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

function mapStateToProps({ boards: { workspace: { board } } }) {
  const columns = get(board, 'data.columns');

  return {
    columns,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ColumnsDragDropContainer);
