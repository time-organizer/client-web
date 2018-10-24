import React from 'react';
import PropTypes from 'prop-types';

import './ContentLayoutFull.css';

const ContentLayoutFull = ({ children }) => (
  <div className="content-layout-full-scroll">
    <div className="content-layout-full">
      {children}
    </div>
  </div>
);

ContentLayoutFull.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
ContentLayoutFull.defaultProps = {
  children: null,
};

export default ContentLayoutFull;
