import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import './Button.css';

const buttonTypes = {
  CANCEL: 'cancel',
  SUBMIT: 'submit',
  NEUTRAL: 'neutral',
  UNDERLINED: 'underlined',
};

const Button = ({
  children, onClick, className, buttonType, fullWidth,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={c(`to-button ${buttonType} ${className}`, { 'full-width': fullWidth })}
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
    buttonTypes.UNDERLINED,
  ]),
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  buttonType: buttonTypes.NEUTRAL,
  fullWidth: false,
};

export default Button;
export {
  buttonTypes,
};
