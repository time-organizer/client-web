import React from 'react';
import PropTypes from 'prop-types';

const TaskDescriptionPresenter = ({ description, toggleEditMode }) => (
  <div className="task-workspace-description-presenter" onClick={toggleEditMode}>
    {description}
  </div>
);

TaskDescriptionPresenter.propTypes = {
  description: PropTypes.string,
  toggleEditMode: PropTypes.func.isRequired,
};
TaskDescriptionPresenter.defaultProps = {
  description: '',
};

export default TaskDescriptionPresenter;
