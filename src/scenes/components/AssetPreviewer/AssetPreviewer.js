import React from 'react';
import PropTypes from 'prop-types';

import AssetModel from '../../../models/Asset';

import './AssetPreviewer.css';
import Icon from '../Icon';

const AssetPreviewer = ({
  asset, imagePath, mockIcon,
}) => (
  <div className="asset-previewer">
    {asset
      ? <img src={imagePath} alt="" />
      : <Icon name={mockIcon} />
    }
  </div>
);

AssetPreviewer.propTypes = {
  asset: AssetModel.propTypes,
  imagePath: PropTypes.string.isRequired,
  mockIcon: PropTypes.string.isRequired,
};

AssetPreviewer.defaultProps = {
  asset: null,
};

export default AssetPreviewer;
