import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const ErrorMessage = ({ message }) => (
  <CSSTransition
    in={!!message}
    timeout={300}
    classNames="error-message"
    unmountOnExit
  >
    <div className="input-message error">
      {message}
    </div>
  </CSSTransition>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
