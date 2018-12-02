import PropTypes from 'prop-types';

const AssetModel = {
  propTypes: PropTypes.oneOfType([
    PropTypes.shape({
      assetId: PropTypes.string.isRequired,
    }),
  ]),
};

export default AssetModel;
