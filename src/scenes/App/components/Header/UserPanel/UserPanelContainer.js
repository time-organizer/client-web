import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { toggleUserSidebar } from '../../../../generalActions';
import AssetModel from '../../../../../models/Asset';
import UserPanel from './UserPanel';

const UserPanelContainer = ({ onToggleUserSidebar, name, avatar }) => (
  <UserPanel
    onToggleUserSidebar={onToggleUserSidebar}
    name={name}
    avatar={avatar}
  />
);

UserPanelContainer.propTypes = {
  onToggleUserSidebar: PropTypes.func.isRequired,
  name: PropTypes.string,
  avatar: AssetModel.propTypes,
};

UserPanelContainer.defaultProps = {
  name: '',
  avatar: null,
};

function mapStateToProps({ user: { profile } }) {
  const name = _.get(profile, 'name', '');
  const avatar = _.get(profile, 'avatar', null);

  return {
    name,
    avatar,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleUserSidebar: () => dispatch(toggleUserSidebar()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPanelContainer);
