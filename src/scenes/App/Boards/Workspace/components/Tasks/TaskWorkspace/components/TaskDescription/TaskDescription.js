import React, { Component, Fragment } from 'react';

import Header3 from '../../../../../../../../common_components/Texts/Header3';
import TaskModel from '../../../../../../../../../models/Task';
import handleInputChange from '../../../../../../../../../utilities/handleInputChange';
import TaskDescriptionPresenter from './TaskDescriptionPresenter';
import TaskDescriptionEditor from './TaskDescriptionEditor';

class TaskDescription extends Component {
  constructor(props) {
    super(props);

    const { task } = this.props;

    this.state = {
      // editMode: false,
      description: task.description,
    };

    this.handleInputChange = handleInputChange.bind(this);
  }

  // toggleEditMode = () => this.setState(prevState => ({ editMode: !prevState.editMode }));

  render() {
    const { task } = this.props;
    const { description: stateDescription, editMode } = this.state;

    return (
      <Fragment>
        <Header3 withMargin>
          Description
        </Header3>
        {!task.description || !editMode
          ? (
            <TaskDescriptionEditor
              description={stateDescription}
              onChange={this.handleInputChange}
            />
          )
          : (
            <TaskDescriptionPresenter description={task.description} />
          )
        }
      </Fragment>
    );
  }
}

TaskDescription.propTypes = {
  task: TaskModel.isRequired,
};
TaskDescription.defaultProps = {};

export default TaskDescription;
