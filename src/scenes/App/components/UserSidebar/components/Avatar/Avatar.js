import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import c from 'classnames';

import {
  AssetPreviewer,
  Loader,
  ErrorMessage,
  iconNames,
} from '../../../../../common_components';
import AssetModel from '../../../../../../models/Asset';

import './Avatar.css';

const Avatar = ({
  avatar, isUploadingAvatar, onDrop, errors,
}) => (
  <div className="avatar">
    {isUploadingAvatar && <Loader small />}
    <Dropzone
      className={c('avatar-circle', { hidden: isUploadingAvatar })}
      onDrop={onDrop}
      multiple={false}
    >
      <AssetPreviewer asset={avatar} mockIcon={iconNames.user} />
    </Dropzone>
    {errors.map(error => (
      <ErrorMessage
        key={error}
        message={error}
        className="center"
      />
    ))}
  </div>
);

Avatar.propTypes = {
  avatar: AssetModel.propTypes,
  isUploadingAvatar: PropTypes.bool,
  onDrop: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string),
};

Avatar.defaultProps = {
  avatar: null,
  isUploadingAvatar: false,
  errors: [],
};

export default Avatar;
