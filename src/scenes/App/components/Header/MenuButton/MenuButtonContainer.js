import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MenuButton from './MenuButton';
import { toggleMenuSidebar } from '../../../../generalActions';

const MenuButtonContainer = ({ onToggleMenuSidebar, history }) => {
  const isInBoardsList = /\/boards\/$/.test(history.location.pathname)
    || /\/boards$/.test(history.location.pathname);

  return !isInBoardsList && (
    <MenuButton
      onToggleMenuSidebar={onToggleMenuSidebar}
    />
  );
};

MenuButtonContainer.propTypes = {
  onToggleMenuSidebar: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onToggleMenuSidebar: () => dispatch(toggleMenuSidebar()),
  };
}

export default withRouter(connect(null, mapDispatchToProps)(MenuButtonContainer));
