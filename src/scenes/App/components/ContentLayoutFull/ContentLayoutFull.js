import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import './ContentLayoutFull.css';

const ContentLayoutFull = ({ children, scrollable }) => (
  <div className={c('content-layout-full', { scrollable })}>
    {children}
  </div>
);

ContentLayoutFull.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  scrollable: PropTypes.bool,
};
ContentLayoutFull.defaultProps = {
  children: null,
  scrollable: false,
};

export default ContentLayoutFull;
