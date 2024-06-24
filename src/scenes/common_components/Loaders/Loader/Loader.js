import React from 'react';
import c from 'classnames';
import PropTypes from 'prop-types';


import './Loader.css';
import Icon, { iconNames } from '../../Icon';

const Loader = ({
  absolute, fullScreen, text, small,
}) => (
  <div
    className={c('loader', {
      absolute,
      'full-screen': fullScreen,
      small,
    })}
  >
    <div className="loader-content">
      <div className="loader-icon-wrapper">
        <Icon name={iconNames.logo} />
      </div>
      <p>{text}</p>
    </div>
  </div>
);

Loader.propTypes = {
  absolute: PropTypes.bool,
  fullScreen: PropTypes.bool,
  text: PropTypes.string,
  small: PropTypes.bool,
};

Loader.defaultProps = {
  absolute: false,
  fullScreen: false,
  text: '',
  small: false,
};

export default Loader;
