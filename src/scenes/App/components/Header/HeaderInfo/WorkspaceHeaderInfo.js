import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Icon, iconNames } from '../../../../common_components';
import Header2 from '../../../../common_components/Texts/Header2';

const WorkspaceHeaderInfo = ({ content }) => (
  <Header2 className="header-info-header">
    <Link to="/boards" className="header-info-link">
      <Icon name={iconNames.arrowLeft} size={28} />
    </Link>
    {content}
  </Header2>
);

WorkspaceHeaderInfo.propTypes = {
  content: PropTypes.string.isRequired,
};
WorkspaceHeaderInfo.defaultProps = {};

export default WorkspaceHeaderInfo;
