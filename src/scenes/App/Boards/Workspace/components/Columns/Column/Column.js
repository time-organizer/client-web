import React from 'react';
import PropTypes from 'prop-types';
import ColumnWrapper from '../ColumnWrapper';

import './Column.css';

const Column = ({ column }) => (
  <ColumnWrapper>
    <div className="column">
      <div>{column.title}</div>
    </div>
  </ColumnWrapper>
);

Column.propTypes = {
  column: PropTypes.shape({}).isRequired,
};
Column.defaultProps = {};

export default Column;
