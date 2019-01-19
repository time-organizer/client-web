import PropTypes from 'prop-types';

const BoardModel = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  columnsOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  participants: PropTypes.arrayOf(PropTypes.shape({})),
  theme: PropTypes.number,
  title: PropTypes.string.isRequired,
});

const BoardModelExtended = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  columns: PropTypes.shape().isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  participants: PropTypes.arrayOf(PropTypes.shape({})),
  theme: PropTypes.number,
  title: PropTypes.string.isRequired,
  columnsOrder: PropTypes.string.isRequired,
});

export { BoardModel, BoardModelExtended };
