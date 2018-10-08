import React from 'react';
import PropTypes from 'prop-types';

import './ContentHeader.css';

const ContentHeader = ({ headerName }) => (
  <div className="content-header">
    <h1>{headerName}</h1>
  </div>
);

ContentHeader.propTypes = {
  headerName: PropTypes.string.isRequired,
};

export default ContentHeader;
