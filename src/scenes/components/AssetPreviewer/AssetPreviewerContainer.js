import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';

import { fetchUserIfNeeded } from '../../App/components/UserSidebar/actions';
import AssetModel from '../../../models/Asset';
import AssetPreviewer from './AssetPreviewer';

const AssetPreviewerContainer = ({ asset, mockIcon }) => {
  const assetId = get(asset, 'assetId', '');

  return (
    <AssetPreviewer
      asset={asset}
      imagePath={assetId}
      mockIcon={mockIcon}
    />
  );
};

AssetPreviewerContainer.propTypes = {
  asset: AssetModel.propTypes,
  mockIcon: PropTypes.string,
};

AssetPreviewerContainer.defaultProps = {
  asset: null,
  mockIcon: '',
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    refreshUser: () => dispatch(fetchUserIfNeeded()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetPreviewerContainer);
