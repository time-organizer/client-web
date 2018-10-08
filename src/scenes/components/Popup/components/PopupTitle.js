import React from 'react';
import PropTypes from 'prop-types';

import './PopupTitle.css';

const PopupTitle = ({ title }) => (
  <div className="popup-title">
    <h1>{title}</h1>
  </div>
);

PopupTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PopupTitle;
