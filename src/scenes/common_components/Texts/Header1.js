import React from 'react';
import PropTypes from 'prop-types';

const Header1 = ({ children }) => (
  <h1>
    {children}
  </h1>
);

Header1.propTypes = {
  children: PropTypes.string.isRequired,
};
Header1.defaultProps = {};

export default Header1;
