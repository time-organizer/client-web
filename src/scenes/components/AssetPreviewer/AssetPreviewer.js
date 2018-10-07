import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import AssetModel from '../../../models/Asset';

import './AssetPreviewer.css';

const AssetPreviewer = ({
  asset, imagePath, isVertical, mockIcon,
}) => (
  <div className="asset-previewer">
    {asset
      ? <img src={imagePath} className={c({ vertical: isVertical })} alt="" />
      : <i className={mockIcon} />
    }
  </div>
);

AssetPreviewer.propTypes = {
  asset: AssetModel.propTypes,
  imagePath: PropTypes.string.isRequired,
  isVertical: PropTypes.bool,
  mockIcon: PropTypes.string,
};

AssetPreviewer.defaultProps = {
  asset: null,
  isVertical: false,
  mockIcon: 'icon-camera',
};

export default AssetPreviewer;
