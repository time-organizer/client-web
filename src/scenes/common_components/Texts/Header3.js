import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

const Header3 = ({ children, withMargin }) => (
  <h3 className={c({ 'with-margin': withMargin })}>
    {children}
  </h3>
);

Header3.propTypes = {
  children: PropTypes.string.isRequired,
  withMargin: PropTypes.bool,
};
Header3.defaultProps = {
  withMargin: false,
};

export default Header3;
