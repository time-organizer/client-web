import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { uploadAvatar } from '../../actions';
import AssetModel from '../../../../../../models/Asset';
import Avatar from './Avatar';

class AvatarContainer extends Component {
  state = {
    errors: [],
  };

  onDrop = (accepted) => {
    this.setState({ errors: [] });
    const { onUploadAvatar } = this.props;
    let errors = [];

    if (!accepted.length) {
      errors = [...errors, 'Wrong file type'];
    }

    if (accepted[0].size > 1000000) {
      errors = [...errors, 'File should be smaller than 1mb'];
    }

    if (!accepted[0].type.startsWith('image')) {
      errors = [...errors, 'File is not of image type'];
    }
    this.setState({ errors });

    if (!errors.length) {
      onUploadAvatar(accepted);
    }
  };

  render() {
    const { avatar, isUploadingAvatar } = this.props;
    const { errors } = this.state;

    return (
      <Avatar
        avatar={avatar}
        isUploadingAvatar={isUploadingAvatar}
        onDrop={this.onDrop}
        errors={errors}
      />
    );
  }
}

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
