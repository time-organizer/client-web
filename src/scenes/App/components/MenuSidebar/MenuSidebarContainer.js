import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleMenuSidebar } from '../../../generalActions';
import MenuSidebar from './MenuSidebar';

const MenuSidebarContainer = ({
  menuSidebarOpened, onToggleMenuSidebar,
}) => (
  <MenuSidebar
    onToggleMenuSidebar={onToggleMenuSidebar}
    menuSidebarOpened={menuSidebarOpened}
  />
);

MenuSidebarContainer.propTypes = {
  onToggleMenuSidebar: PropTypes.func.isRequired,
  menuSidebarOpened: PropTypes.bool,
};

MenuSidebarContainer.defaultProps = {
  menuSidebarOpened: false,
};

function mapStateToProps({ general: { menuSidebarOpened } }) {
  return {
    menuSidebarOpened,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleMenuSidebar: () => dispatch(toggleMenuSidebar()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuSidebarContainer);
