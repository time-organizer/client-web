import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import AssetPreviewer from '../../../../../components/AssetPreviewer';
import AssetModel from '../../../../../../models/Asset';
import Loader from '../../../../../components/Loaders/Loader';

class Avatar extends Component {
  onDrop = (accepted) => {
    const { onUploadAvatar } = this.props;

    onUploadAvatar(accepted);
  };

  render() {
    const { avatar, isUploadingAvatar } = this.props;
    return (
      <div className="avatar">
        <Dropzone
          className="avatar-circle"
          onDrop={this.onDrop}
          multiple={false}
          disabled={isUploadingAvatar}
        >
          {isUploadingAvatar
            ? <Loader />
            : <AssetPreviewer asset={avatar} mockIcon="icon-user" />
          }
        </Dropzone>
      </div>
    );
  }
}

Avatar.propTypes = {
  onUploadAvatar: PropTypes.func.isRequired,
  avatar: AssetModel.propTypes,
  isUploadingAvatar: PropTypes.bool,
};

Avatar.defaultProps = {
  avatar: null,
  isUploadingAvatar: false,
};

export default Avatar;
