import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ children, className }) => (
  <p className={className}>
    {children}
  </p>
);

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};
Paragraph.defaultProps = {
  className: '',
};

export default Paragraph;
