import React from 'react';
import PropTypes from 'prop-types';

import './BorderInput.css';

const BorderInput = ({
  onChange, name, type, placeholder, className, value, withLabel,
}) => (
  <div className="border-input-wrapper">
    {withLabel && (
      <label htmlFor={name}>{placeholder}</label>
    )}
    <input
      className={`${className}`}
      name={name}
      placeholder={withLabel ? '' : placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  </div>
);

BorderInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  withLabel: PropTypes.bool,
};

BorderInput.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
  value: '',
  withLabel: false,
};

export default BorderInput;
