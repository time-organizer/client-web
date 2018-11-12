import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const Fade = ({ children, trigger, timeout }) => (
  <CSSTransition
    in={trigger}
    timeout={timeout}
    classNames="fade"
    unmountOnExit
  >
    {children}
  </CSSTransition>
);

Fade.propTypes = {
  children: PropTypes.node.isRequired,
  trigger: PropTypes.bool.isRequired,
  timeout: PropTypes.number,
};
Fade.defaultProps = {
  timeout: 300,
};

export default Fade;
