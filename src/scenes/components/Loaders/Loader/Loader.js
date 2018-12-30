import React from 'react';
import c from 'classnames';
import PropTypes from 'prop-types';

import './Loader.css';

const Loader = ({ absolute }) => (
  <div className={c('loader loader--style1', absolute)} title="0">

    <svg
      version="1.1"
      id="L4"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 50 50"
      enableBackground="new 0 0 0 0"
      xmlSpace="preserve"
    >
      <circle stroke="none" cx="6" cy="25" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        />
      </circle>
      <circle fill="#fff" stroke="none" cx="25" cy="25" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        />
      </circle>
      <circle fill="#fff" stroke="none" cx="44" cy="25" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"
        />
      </circle>
    </svg>
  </div>
);

Loader.propTypes = {
  absolute: PropTypes.bool,
};

Loader.defaultProps = {
  absolute: false,
};

export default Loader;
