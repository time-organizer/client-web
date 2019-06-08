import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

const Header1 = ({ children, withMargin, className }) => (
  <h1 className={c(className, { 'with-margin': withMargin })}>
    {children}
  </h1>
);

Header1.propTypes = {
  children: PropTypes.string.isRequired,
  withMargin: PropTypes.bool,
  className: PropTypes.string,
};
Header1.defaultProps = {
  withMargin: false,
  className: '',
};

export default Header1;
