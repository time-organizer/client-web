import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

const Header2 = ({ children, withMargin, className }) => (
  <h2 className={c(className, { 'with-margin': withMargin })}>
    {children}
  </h2>
);

Header2.propTypes = {
  children: PropTypes.string.isRequired,
  withMargin: PropTypes.bool,
  className: PropTypes.string,
};
Header2.defaultProps = {
  withMargin: false,
  className: '',
};

export default Header2;
