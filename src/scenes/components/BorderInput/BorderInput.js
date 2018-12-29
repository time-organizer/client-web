import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import './BorderInput.css';

const BorderInput = ({
  onChange, name, type, placeholder, className, value, withLabel, icon,
}) => (
  <div className="border-input-wrapper">
    {withLabel && (
      <label htmlFor={name}>{placeholder}</label>
    )}
    <input
      className={c(className, { 'with-icon': icon })}
      name={name}
      placeholder={withLabel ? '' : placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
    {icon && (
      <div className="input-icon">
        <i className={icon} />
      </div>
    )}
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
  icon: PropTypes.string,
};

BorderInput.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
  value: '',
  withLabel: false,
  icon: '',
};

export default BorderInput;
