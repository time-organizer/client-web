import React, { Component } from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import './BorderInput.css';

class BorderInput extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    const { focus } = this.props;

    if (focus) {
      this.inputRef.current.focus();
    }
  }

  render() {
    const {
      onChange, name, type, placeholder, className, value, withLabel, icon, onButtonClick,
    } = this.props;

    return (
      <div className="border-input-wrapper">
        {withLabel && (
          <label htmlFor={name}>{placeholder}</label>
        )}
        <input
          ref={this.inputRef}
          className={c(className, { 'with-icon': icon })}
          name={name}
          placeholder={withLabel ? '' : placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
        {icon && (
          <div className="input-icon" onClick={onButtonClick}>
            <i className={icon} />
          </div>
        )}
      </div>
    );
  }
}

BorderInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  withLabel: PropTypes.bool,
  icon: PropTypes.string,
  onButtonClick: PropTypes.func,
  focus: PropTypes.bool,
};

BorderInput.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
  value: '',
  withLabel: false,
  icon: '',
  onButtonClick: null,
  focus: false,
};

export default BorderInput;
