import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const buttonTypes = {
  CANCEL: 'cancel',
  SUBMIT: 'submit',
  NEUTRAL: 'neutral',
};

const Button = ({
  children, onClick, className, buttonType,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`to-button ${buttonType} ${className}`}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  buttonType: PropTypes.oneOf([
    buttonTypes.CANCEL,
    buttonTypes.SUBMIT,
    buttonTypes.NEUTRAL,
  ]),
};

Button.defaultProps = {
  className: '',
  buttonType: buttonTypes.NEUTRAL,
};

export default Button;
