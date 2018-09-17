import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  onChange, name, type, placeholder, className, value,
}) => (
  <input
    className={`${className}`}
    name={name}
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={onChange}
  />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
};
Input.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
  value: '',
};

export default Input;
