import PropTypes from 'prop-types';

const ColumnModel = PropTypes.shape({
  title: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
});

export default ColumnModel;
