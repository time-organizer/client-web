import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { toggleUserSidebar } from '../../../../generalActions';
import UserPanel from './UserPanel';

const UserPanelContainer = ({ onToggleUserSidebar, name }) => (
  <UserPanel onToggleUserSidebar={onToggleUserSidebar} name={name} />
);

UserPanelContainer.propTypes = {
  onToggleUserSidebar: PropTypes.func.isRequired,
  name: PropTypes.string,
};

UserPanelContainer.defaultProps = {
  name: '',
};

function mapStateToProps({ user: { profile } }) {
  const name = _.get(profile, 'name', '');
  return {
    name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleUserSidebar: () => dispatch(toggleUserSidebar()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPanelContainer);
