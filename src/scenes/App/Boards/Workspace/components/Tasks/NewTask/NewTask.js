import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

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
    const { columnId } = this.props;
    const { newTaskFormOpened } = this.state;

    return (
      <Fragment>
        {newTaskFormOpened && (
          <NewTaskForm
            onClose={this.toggleNewTaskFormOpened}
            columnId={columnId}
          />
        )}
        <NewTaskButton onClick={this.toggleNewTaskFormOpened} />
      </Fragment>
    );
  }
}

NewTask.propTypes = {
  columnId: PropTypes.string.isRequired,
};
NewTask.defaultProps = {};

export default NewTask;
