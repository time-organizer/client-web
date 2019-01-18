import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';

import handleInputChange from '../../../../../../../../utilities/handleInputChange';
import { addNewTask } from '../../actions';
import NewTaskForm from './NewTaskForm';

class NewTaskFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.handleInputChange = handleInputChange.bind(this);
  }

  submitNewTask = () => {
    const { onAddNewTask, columnId, boardId } = this.props;
    const { title } = this.state;

    const newTask = {
      title,
      columnId,
      boardId,
    };

    onAddNewTask(newTask);
  };

  render() {
    const { onClose } = this.props;
    const { title } = this.state;

    return (
      <NewTaskForm
        onClose={onClose}
        onChange={this.handleInputChange}
        onSubmit={this.submitNewTask}
        values={{
          title,
        }}
      />
    );
  }
}

NewTaskFormContainer.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAddNewTask: PropTypes.func.isRequired,
  columnId: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired,
};
NewTaskFormContainer.defaultProps = {};

function mapStateToProps({ boards: { workspace: { board } } }) {
  const boardId = get(board, 'data._id');

  return {
    boardId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddNewTask: newTask => dispatch(addNewTask(newTask)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskFormContainer);
