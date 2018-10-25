import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MenuButton from './MenuButton';
import { toggleMenuSidebar } from '../../../../generalActions';

const MenuButtonContainer = ({ onToggleMenuSidebar }) => (
  <MenuButton
    onToggleMenuSidebar={onToggleMenuSidebar}
  />
);

MenuButtonContainer.propTypes = {
  onToggleMenuSidebar: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onToggleMenuSidebar: () => dispatch(toggleMenuSidebar()),
  };
}

export default connect(null, mapDispatchToProps)(MenuButtonContainer);
