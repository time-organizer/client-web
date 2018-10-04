import React from 'react';
import PropTypes from 'prop-types';

import './ContentHeader.css';

const ContentHeader = ({ headerName }) => (
  <div className="content-header">
    {headerName}
  </div>
);

ContentHeader.propTypes = {
  headerName: PropTypes.string.isRequired,
};

export default ContentHeader;
