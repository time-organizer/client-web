import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header3 from '../../../../../../../../common_components/Texts/Header3';
import TaskDescriptionPresenter from './TaskDescriptionPresenter';
import TaskDescriptionEditor from './TaskDescriptionEditor';

const TaskDescription = ({
  editMode, description, handleInputChange, updateTask, formErrors, toggleEditMode,
}) => (
  <Fragment>
    <Header3 withMargin className="task-workspace-section-header">
      Description
    </Header3>
    {editMode
      ? (
        <TaskDescriptionEditor
          description={description}
          onChange={handleInputChange}
          updateTask={updateTask}
          formErrors={formErrors}
        />
      )
      : (
        <TaskDescriptionPresenter
          description={description}
          toggleEditMode={toggleEditMode}
          escription={description}
        />
      )
    }
  </Fragment>
);

TaskDescription.propTypes = {
  editMode: PropTypes.bool.isRequired,
  description: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  formErrors: PropTypes.arrayOf(PropTypes.string),
  toggleEditMode: PropTypes.func.isRequired,
};
TaskDescription.defaultProps = {
  description: '',
  formErrors: [],
};

export default TaskDescription;
