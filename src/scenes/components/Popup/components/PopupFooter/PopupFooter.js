import React from 'react';
import PropTypes from 'prop-types';

import Button, { buttonTypes } from '../../../Button/Button';

import './PopupFooter.css';

const PopupFooter = ({ children, cancel, accept }) => (
  <div className="popup-footer">
    {children}
    <div className="popup-footer-buttons">
      {cancel && (
        <Button className="popup-footer-button" onClick={cancel} buttonType={buttonTypes.CANCEL}>
          Cancel
        </Button>
      )}
      {accept && (
        <Button className="popup-footer-button" onClick={accept} buttonType={buttonTypes.SUBMIT}>
          Accept
        </Button>
      )}
    </div>
  </div>
);

PopupFooter.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  cancel: PropTypes.func,
  accept: PropTypes.func,
};
PopupFooter.defaultProps = {
  children: null,
  cancel: undefined,
  accept: undefined,
};

export default PopupFooter;
