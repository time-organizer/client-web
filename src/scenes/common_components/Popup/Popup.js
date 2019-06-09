import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import c from 'classnames';

import Portal from '../Portal';
import CloseButton from '../CloseButton';
import Fade from '../transitions/Fade';

import './Popup.css';
import Header3 from '../Texts/Header3';

export const popupTypes = {
  small: 'small',
  medium: 'medium',
  normal: 'normal',
  fullscreen: 'fullscreen',
};

export const popupLayers = {
  default: 'layer-default',
  higher: 'layer-higher',
  highest: 'layer-highest',
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
    // eslint-disable-next-line
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    // eslint-disable-next-line
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  closePopup = () => {
    const { onClose } = this.props;
    this.setState({ animationTriggered: false });

    setTimeout(onClose, 300);
  };

  handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      this.closePopup();
    }
  };

  render() {
    const {
      children, popupType, withCloseButton, title, footer, popupLayer,
    } = this.props;
    const { animationTriggered } = this.state;

    return (
      <Portal>
        <Fade trigger={animationTriggered}>
          <div className={`popup-overlay ${popupType} ${popupLayer}`} onClick={this.closePopup} />
        </Fade>
        <CSSTransition
          in={animationTriggered}
          classNames="popup-transition"
          unmountOnExit
          timeout={300}
        >
          <div className={c(
            `popup ${popupType} ${popupLayer}`, {
              'with-footer': !!footer,
            },
          )}
          >
            {title && (
              <div className="popup-title">
                <Header3>{title}</Header3>
              </div>
            )}
            {withCloseButton && (
              <CloseButton onClose={this.closePopup} edgeOffset={20} />
            )}
            <div className="popup-content">
              {children}
            </div>
            {footer}
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
  popupLayer: PropTypes.oneOf([
    popupLayers.default,
    popupLayers.higher,
    popupLayers.highest,
  ]),
  withCloseButton: PropTypes.bool,
  title: PropTypes.string,
  footer: PropTypes.node,
};
Popup.defaultProps = {
  children: null,
  popupType: popupTypes.normal,
  withCloseButton: true,
  title: '',
  footer: null,
  popupLayer: popupLayers.default,
};

export default Popup;
