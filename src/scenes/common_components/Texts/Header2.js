import React from 'react';
import PropTypes from 'prop-types';

const Header2 = ({ children }) => (
  <h2>
    {children}
  </h2>
);

Header2.propTypes = {
  children: PropTypes.string.isRequired,
};
Header2.defaultProps = {};

export default Header2;
