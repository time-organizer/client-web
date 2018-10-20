import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { uploadAvatar } from '../../actions';
import AssetModel from '../../../../../../models/Asset';
import Avatar from './Avatar';
import './Avatar.css';

const AvatarContainer = ({ onUploadAvatar, avatar, isUploadingAvatar }) => (
  <Avatar
    onUploadAvatar={onUploadAvatar}
    avatar={avatar}
    isUploadingAvatar={isUploadingAvatar}
  />
);

AvatarContainer.propTypes = {
  onUploadAvatar: PropTypes.func.isRequired,
  avatar: AssetModel.propTypes,
  isUploadingAvatar: PropTypes.bool,
};
AvatarContainer.defaultProps = {
  avatar: null,
  isUploadingAvatar: false,
};

function mapStateToProps({ user: { profile, isUploadingAvatar } }) {
  const avatar = get(profile, 'avatar', null);
  return {
    avatar,
    isUploadingAvatar,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onUploadAvatar: acceptedFiles => dispatch(uploadAvatar(acceptedFiles)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AvatarContainer);
