import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

const Header3 = ({ children, withMargin, className }) => (
  <h3 className={c(className, { 'with-margin': withMargin })}>
    {children}
  </h3>
);

Header3.propTypes = {
  children: PropTypes.string.isRequired,
  withMargin: PropTypes.bool,
  className: PropTypes.string,
};
Header3.defaultProps = {
  withMargin: false,
  className: '',
};

export default Header3;
