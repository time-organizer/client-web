import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import c from 'classnames';

import { fetchUserIfNeeded } from '../../App/components/UserSidebar/actions';
import AssetModel from '../../../models/Asset';

import './AssetPreviewer.css';

const AssetPreviewerContainer = ({ asset, userId, mockIcon }) => {
  const assetId = _.get(asset, 'assetId', '');
  const imagePath = `${process.env.REACT_APP_DATA_FLOW_URL}/assets/${userId}/${assetId}`;
  const isVertical = _.get(asset, 'size.height', 1) > _.get(asset, 'size.width', 0);

  return (
    <div className="asset-previewer">
      {asset
        ? <img src={imagePath} className={c({ vertical: isVertical })} alt="" />
        : <i className={mockIcon} />
      }
    </div>
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
    userId: _.get(profile, '_id', ''),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    refreshUser: () => dispatch(fetchUserIfNeeded()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetPreviewerContainer);
