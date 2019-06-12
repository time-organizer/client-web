import React from 'react';
import PropTypes from 'prop-types';
import Header3 from '../../../../../../common_components/Texts/Header3';

const SidebarSection = ({ title, children }) => (
  <div className="sidebar-section">
    <Header3 withMargin>
      {title}
    </Header3>
    {children}
  </div>
);

SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export default SidebarSection;
