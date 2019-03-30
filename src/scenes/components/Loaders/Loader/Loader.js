import React from 'react';
import c from 'classnames';
import PropTypes from 'prop-types';

import './Loader.css';

const Loader = ({ absolute, fullScreen, text }) => (
  <div
    className={c('loader', {
      absolute,
      'full-screen': fullScreen,
    })}
  >
    <div className="loader-content">
      <div className="loader-icon-wrapper">
        <i className="icon-logo" />
      </div>
      <h3>{text}</h3>
    </div>
  </div>
);

Loader.propTypes = {
  absolute: PropTypes.bool,
  fullScreen: PropTypes.bool,
  text: PropTypes.string,
};

Loader.defaultProps = {
  absolute: false,
  fullScreen: false,
  text: '',
};

export default Loader;
