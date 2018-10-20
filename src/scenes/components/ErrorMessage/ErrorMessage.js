import React from 'react';
import PropTypes from 'prop-types';

import './ErrorMessage.css';

const ErrorMessage = ({ message }) => (
  <div className="error-message error">
    {message}
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
