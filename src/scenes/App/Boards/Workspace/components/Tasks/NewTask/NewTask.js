import React, { Component, Fragment } from 'react';

import NewTaskButton from './NewTaskButton';
import NewTaskForm from './NewTaskForm';

class NewTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTaskFormOpened: false,
    };
  }

  toggleNewTaskFormOpened = () => {
    const { newTaskFormOpened } = this.state;

    this.setState({ newTaskFormOpened: !newTaskFormOpened });
  };

  render() {
    const { newTaskFormOpened } = this.state;

    return (
      <Fragment>
        {newTaskFormOpened && (
          <NewTaskForm onClose={this.toggleNewTaskFormOpened} />
        )}
        <NewTaskButton onClick={this.toggleNewTaskFormOpened} />
      </Fragment>
    );
  }
}

NewTask.propTypes = {};
NewTask.defaultProps = {};

export default NewTask;
