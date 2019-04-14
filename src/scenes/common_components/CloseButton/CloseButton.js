import React from 'react';
import PropTypes from 'prop-types';

import './CloseButton.css';

const CloseButton = ({ onClose, edgeOffset }) => (
  <div
    className="close-button"
    style={{ top: `${edgeOffset}px`, right: `${edgeOffset}px` }}
    onClick={onClose}
  >
    <i className="icon-cancel" />
  </div>
);

CloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
  edgeOffset: PropTypes.number,
};

CloseButton.defaultProps = {
  edgeOffset: 16,
};

export default CloseButton;
