import React from 'react';
import PropTypes from 'prop-types';

import './TextArea.css';

const TextArea = ({
  onChange, name, className, value,
}) => (
  <div className="textarea-wrapper">
    <textarea
      className={className}
      onChange={onChange}
      name={name}
      value={value}
    />
  </div>
);

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
};
TextArea.defaultProps = {
  className: '',
  value: '',
};

export default TextArea;
