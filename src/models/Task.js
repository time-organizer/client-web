import PropTypes from 'prop-types';

const TaskModel = PropTypes.shape({
  title: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  columnId: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
});

export default TaskModel;
