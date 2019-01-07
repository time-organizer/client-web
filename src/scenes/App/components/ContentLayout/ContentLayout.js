import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import './ContentLayout.css';

const ContentLayout = ({ children, scrollable }) => (
  <div className={c('content-layout', { scrollable })}>
    {children}
  </div>
);

ContentLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  scrollable: PropTypes.bool,
};
ContentLayout.defaultProps = {
  children: null,
  scrollable: false,
};

export default ContentLayout;
