import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import Portal from '../Portal';
import CloseButton from '../CloseButton';

import './Popup.css';

export const popupTypes = {
  small: 'small',
  medium: 'medium',
  normal: 'normal',
  fullscreen: 'fullscreen',
};

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationTriggered: false,
    };
  }

  componentDidMount() {
    this.setState({ animationTriggered: true });
  }

  closePopup = () => {
    const { onClose } = this.props;
    this.setState({ animationTriggered: false });

    setTimeout(onClose, 300);
  };

  render() {
    const {
      children, popupType, withCloseButton,
    } = this.props;
    const { animationTriggered } = this.state;

    return (
      <Portal>
        <CSSTransition
          in={animationTriggered}
          classNames="popup-overlay-transition"
          unmountOnExit
          timeout={300}
        >
          <div className="popup-overlay" onClick={this.closePopup} />
        </CSSTransition>
        <CSSTransition
          in={animationTriggered}
          classNames="popup-transition"
          unmountOnExit
          timeout={300}
        >
          <div className={`popup ${popupType}`}>
            {withCloseButton && (
              <CloseButton onClose={this.closePopup} />
            )}
            {children}
          </div>
        </CSSTransition>
      </Portal>
    );
  }
}

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
