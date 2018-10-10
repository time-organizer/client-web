import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const Fade = ({ children, trigger }) => (
  <CSSTransition
    in={trigger}
    timeout={300}
    classNames="fade"
    unmountOnExit
  >
    {children}
  </CSSTransition>
);

Fade.propTypes = {
  children: PropTypes.node.isRequired,
  trigger: PropTypes.bool.isRequired,
};
Fade.defaultProps = {};

export default Fade;
