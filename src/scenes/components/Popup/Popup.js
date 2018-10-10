import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import Portal from '../Portal';
import CloseButton from '../CloseButton';
import PopupTitle from './components/PopupTitle';
import Fade from '../transitions/Fade';

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
      children, popupType, withCloseButton, title,
    } = this.props;
    const { animationTriggered } = this.state;

    return (
      <Portal>
        <Fade trigger={animationTriggered}>
          <div className={`popup-overlay ${popupType}`} onClick={this.closePopup} />
        </Fade>
        <CSSTransition
          in={animationTriggered}
          classNames="popup-transition"
          unmountOnExit
          timeout={300}
        >
          <div className={`popup ${popupType}`}>
            {title && (
              <PopupTitle title={title} />
            )}
            {withCloseButton && (
              <CloseButton onClose={this.closePopup} edgeOffset={20} />
            )}
            <div className="popup-content" style={{ padding: '24px' }}>
              {children}
            </div>
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
  title: PropTypes.string,
};
Popup.defaultProps = {
  children: null,
  popupType: popupTypes.normal,
  withCloseButton: true,
  title: '',
};

export default Popup;
