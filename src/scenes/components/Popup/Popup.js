import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import CloseButton from '../CloseButton';

import './Popup.css';

export const popupTypes = {
  small: 'small',
  medium: 'medium',
  normal: 'normal',
  fullscreen: 'fullscreen',
};

const Popup = ({
  onClose, children, popupType, withCloseButton,
}) => (
  <Portal>
    <div className="popup-overlay" onClick={onClose}>
      <div className={`popup ${popupType}`}>
        {withCloseButton && (
          <CloseButton onClose={onClose} />
        )}
        {children}
      </div>
    </div>
  </Portal>
);

Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  popupType: PropTypes.oneOf([
    popupTypes.small,
    popupTypes.medium,
    popupTypes.normal,
    popupTypes.fullscreen,
  ]),
  withCloseButton: PropTypes.bool,
};
Popup.defaultProps = {
  children: null,
  popupType: popupTypes.normal,
  withCloseButton: true,
};

export default Popup;
