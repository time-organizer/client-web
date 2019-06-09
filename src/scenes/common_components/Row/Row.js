import React from 'react';
import PropTypes from 'prop-types';

import './Row.css';

const Row = ({ children }) => (
  <div className="row">
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};
Row.defaultProps = {};

export default Row;
