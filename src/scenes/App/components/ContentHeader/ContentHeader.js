import React from 'react';
import PropTypes from 'prop-types';

import './ContentHeader.css';
import Header3 from '../../../common_components/Texts/Header3';

const ContentHeader = ({ headerName }) => (
  <div className="content-header">
    <Header3>{headerName}</Header3>
  </div>
);

ContentHeader.propTypes = {
  headerName: PropTypes.string.isRequired,
};

export default ContentHeader;
