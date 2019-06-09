import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

const Header4 = ({ children, withMargin, className }) => (
  <h4 className={c(className, { 'with-margin': withMargin })}>
    {children}
  </h4>
);

Header4.propTypes = {
  children: PropTypes.string.isRequired,
  withMargin: PropTypes.bool,
  className: PropTypes.string,
};
Header4.defaultProps = {
  withMargin: false,
  className: '',
};

export default Header4;
