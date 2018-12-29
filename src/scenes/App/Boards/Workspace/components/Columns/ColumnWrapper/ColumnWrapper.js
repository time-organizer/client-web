import React from 'react';
import PropTypes from 'prop-types';

import './ColumnWrapper.css';

const ColumnWrapper = ({ children }) => (
  <div className="column-wrapper">
    {children}
  </div>
);

ColumnWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
ColumnWrapper.defaultProps = {};

export default ColumnWrapper;
