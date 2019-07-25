import React from 'react';
import PropTypes from 'prop-types';
import Header4 from '../../../../../../common_components/Texts/Header4';

const SidebarSection = ({ title, children }) => (
  <div className="sidebar-section">
    <Header4 className="siebar-section-title" withMargin>
      {title}
    </Header4>
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
