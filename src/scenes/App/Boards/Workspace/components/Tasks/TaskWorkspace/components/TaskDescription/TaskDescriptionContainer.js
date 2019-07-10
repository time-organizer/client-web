import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TaskDescription from './TaskDescription';
import handleInputChange from '../../../../../../../../../utilities/handleInputChange';
import TaskModel from '../../../../../../../../../models/Task';
import { updateTask } from '../../../actions';
import {
  addFormError,
  removeFormError,
} from '../../../../../../../../../utilities/handleFormErrors';

class TaskDescriptionContainer extends Component {
  constructor(props) {
    super(props);

    const { task } = props;

    this.state = {
      editMode: !task.description,
      description: task.description || '',
      formErrors: [],
    };

    this.handleInputChange = handleInputChange.bind(this);
    this.addFormError = addFormError.bind(this);
    this.removeFormError = removeFormError.bind(this);
    this.possibleFormErrors = {
      noDescription: 'Please provide a description',
    };
  }

  toggleEditMode = () => {
    this.setState(prevState => ({ editMode: !prevState.editMode }));
  };

  updateTask = () => {
    const { onUpdateTask, task } = this.props;
    const { description } = this.state;

    const updates = { description };

    if (this.isFormInvalid()) {
      return;
    }

    onUpdateTask(task._id, updates)
      .then(this.toggleEditMode)
      .catch(() => {});
  };

  isFormInvalid = () => {
    const { description } = this.state;

    if (description.trim().length === 0) {
      this.addFormError(this.possibleFormErrors.noDescription);
      return true;
    }

    this.removeFormError(this.possibleFormErrors.noDescription);
    return false;
  };

  render() {
    const { editMode, description, formErrors } = this.state;

    return (
      <TaskDescription
        editMode={editMode}
        description={description}
        handleInputChange={this.handleInputChange}
        updateTask={this.updateTask}
        formErrors={formErrors}
        toggleEditMode={this.toggleEditMode}
      />
    );
  }
}

TaskDescriptionContainer.propTypes = {
  task: TaskModel.isRequired,
  onUpdateTask: PropTypes.func.isRequired,
};
TaskDescriptionContainer.defaultProps = {};

function mapDispatchToProps(dispatch) {
  return {
    onUpdateTask: (taskId, newData) => dispatch(updateTask(taskId, newData)),
  };
}

export default connect(null, mapDispatchToProps)(TaskDescriptionContainer);
