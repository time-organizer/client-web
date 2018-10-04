import React from 'react';
import PropTypes from 'prop-types';

import './Content.css';

const Content = ({ children }) => (
  <div className="content">
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

Content.defaultProps = {
  children: null,
};

export default Content;
