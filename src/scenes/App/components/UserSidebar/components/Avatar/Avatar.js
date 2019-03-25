import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import c from 'classnames';

import AssetPreviewer from '../../../../../components/AssetPreviewer';
import AssetModel from '../../../../../../models/Asset';
import Loader from '../../../../../components/Loaders/Loader';
import ErrorMessage from '../../../../../components/ErrorMessage';

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
      <AssetPreviewer asset={avatar} mockIcon="icon-user" />
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
