import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleUserSidebar } from '../../../../generalActions';
import UserPanel from './UserPanel';

const UserPanelContainer = ({ onToggleUserSidebar, name }) => (
  <UserPanel onToggleUserSidebar={onToggleUserSidebar} name={name} />
);

UserPanelContainer.propTypes = {
  onToggleUserSidebar: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

function mapStateToProps() {
  return {
    name: 'Michał',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleUserSidebar: () => dispatch(toggleUserSidebar()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPanelContainer);
