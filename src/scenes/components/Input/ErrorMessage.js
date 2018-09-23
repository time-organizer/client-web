import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => (
  <div className="input-message error">
    {message}
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
