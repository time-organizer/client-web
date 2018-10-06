import React from 'react';
import PropTypes from 'prop-types';

import './ContentLayout.css';

const ContentLayout = ({ children }) => (
  <div className="content-layout-scroll">
    <div className="content-layout">
      {children}
    </div>
  </div>
);

ContentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
ContentLayout.defaultProps = {
  children: null,
};

export default ContentLayout;
