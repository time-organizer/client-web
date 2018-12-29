import PropTypes from 'prop-types';

const BoardModel = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  })),
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  participants: PropTypes.arrayOf(PropTypes.shape({})),
  theme: PropTypes.number,
  title: PropTypes.string.isRequired,
});

export default BoardModel;
