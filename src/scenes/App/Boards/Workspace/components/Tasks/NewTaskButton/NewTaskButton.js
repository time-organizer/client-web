import React, { Component, Fragment } from 'react';

import './NewTaskButton.css';
import NewTaskForm from '../NewTaskForm/NewTaskForm';

class NewTaskButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTaskFormOpened: false,
    };
  }

  togglenewTaskFormOpened = () => {
    const { newTaskFormOpened } = this.state;

    this.setState({ newTaskFormOpened: !newTaskFormOpened });
  };

  render() {
    const { newTaskFormOpened } = this.state;
    return (
      <Fragment>
        {newTaskFormOpened && (
          <NewTaskForm onClose={this.togglenewTaskFormOpened} />
        )}
        <div
          className="new-task-button"
          onClick={this.togglenewTaskFormOpened}
        >
          <i>+</i>
        </div>
      </Fragment>
    );
  }
}

NewTaskButton.propTypes = {};
NewTaskButton.defaultProps = {};

export default NewTaskButton;
