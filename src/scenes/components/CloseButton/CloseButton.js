import React from 'react';
import PropTypes from 'prop-types';

import './CloseButton.css';

const CloseButton = ({ onClose }) => (
  <div className="close-button" onClick={onClose}>
    <i className="icon-cancel" />
  </div>
);

CloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CloseButton;
