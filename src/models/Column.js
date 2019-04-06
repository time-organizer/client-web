import PropTypes from 'prop-types';

const ColumnModel = PropTypes.shape({
  title: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  tasksOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
});

export default ColumnModel;
