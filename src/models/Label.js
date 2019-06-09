import PropTypes from 'prop-types';

const LabelModel = PropTypes.shape({
  title: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired,
  dueDate: PropTypes.string,
  startingDate: PropTypes.string,
});

export default LabelModel;
