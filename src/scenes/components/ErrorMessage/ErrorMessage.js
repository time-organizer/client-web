import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import './ErrorMessage.css';

const ErrorMessage = ({ message, center }) => (
  <div className={c('error-message error', { center })}>
    {message}
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  center: PropTypes.bool,
};

ErrorMessage.defaultProps = {
  center: false,
};

export default ErrorMessage;
