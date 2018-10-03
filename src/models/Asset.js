import PropTypes from 'prop-types';

const AssetModel = {
  propTypes: PropTypes.oneOfType([
    PropTypes.shape({
      assetId: PropTypes.string.isRequired,
      size: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }).isRequired,
    }),
  ]),
};

export default AssetModel;
