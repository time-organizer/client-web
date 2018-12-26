import React from 'react';
import c from 'classnames';
import PropTypes from 'prop-types';

import './Loader.css';

const Loader = ({ absolute }) => (
  <div className={c('loader loader--style1', absolute)} title="0">
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 0 0"
      xmlSpace="preserve"
    >
      <circle
        fill="none"
        stroke="#fff"
        strokeWidth="4"
        cx="50"
        cy="50"
        r="44"
        style={{ opacity: 0.5 }}
      />
      <circle fill="#fff" stroke="#4995ed" strokeWidth="2" cx="8" cy="54" r="6">
        <animateTransform
          attributeName="transform"
          dur="2s"
          type="rotate"
          from="0 50 48"
          to="360 50 52"
          repeatCount="indefinite"
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
