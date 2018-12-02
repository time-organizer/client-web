import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';

import { fetchUserIfNeeded } from '../../App/components/UserSidebar/actions';
import AssetModel from '../../../models/Asset';
import AssetPreviewer from './AssetPreviewer';

const AssetPreviewerContainer = ({ asset, userId, mockIcon }) => {
  const assetId = get(asset, 'assetId', '');
  const imagePath = `${process.env.REACT_APP_DATA_FLOW_URL}/assets/${userId}/${assetId}`;

  return (
    <AssetPreviewer
      asset={asset}
      imagePath={imagePath}
      mockIcon={mockIcon}
    />
  );
};

AssetPreviewerContainer.propTypes = {
  asset: AssetModel.propTypes,
  userId: PropTypes.string.isRequired,
  mockIcon: PropTypes.string,
};

AssetPreviewerContainer.defaultProps = {
  asset: null,
  mockIcon: 'icon-camera',
};

function mapStateToProps({ user: { profile } }) {
  return {
    userId: get(profile, '_id', ''),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    refreshUser: () => dispatch(fetchUserIfNeeded()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetPreviewerContainer);
