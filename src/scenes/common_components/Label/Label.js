import React from 'react';
import PropTypes from 'prop-types';

import './Label.css';

const Label = ({ value }) => (
  <div className="label">
    {value}
  </div>
);

Label.propTypes = {
  value: PropTypes.string.isRequired,
};
Label.defaultProps = {};

export default Label;
