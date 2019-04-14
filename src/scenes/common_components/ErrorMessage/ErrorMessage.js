import React from 'react';
import PropTypes from 'prop-types';

import './ErrorMessage.css';

const ErrorMessage = ({ message, className }) => (
  <div className={`error-message error ${className}`}>
    {message}
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ErrorMessage.defaultProps = {
  className: '',
};

export default ErrorMessage;
