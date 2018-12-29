import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NewBoardForm from './NewBoardForm';
import { toggleNewBoardForm } from '../../../../generalActions';
import { addNewBoard } from '../actions';
import { addFormError, removeFormError } from '../../../../../utilities/handleFormErrors';

class NewBoardFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      chosenTheme: null,
      formErrors: [],
    };

    this.addFormError = addFormError.bind(this);
    this.removeFormError = removeFormError.bind(this);
    this.possibleFormErrors = {
      noTitle: 'Please provide a title',
    };
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      this.isFormInvalid();
    });
  };

  changeBoardTheme = (boardTheme) => {
    const { chosenTheme } = this.state;
    if (boardTheme === chosenTheme) {
      this.setState({ chosenTheme: null });
      return;
    }

    this.setState({ chosenTheme: boardTheme });
  };

  submitNewBoard = () => {
    const { onAddNewBoard } = this.props;
    const { title, chosenTheme } = this.state;

    if (this.isFormInvalid()) {
      return; // eslint-disable-line
    }

    const newBoard = {
      title,
      theme: chosenTheme,
    };

    onAddNewBoard(newBoard);
  };

  isFormInvalid = () => {
    const { title } = this.state;

    if (title.trim().length === 0) {
      this.addFormError(this.possibleFormErrors.noTitle);
      return true;
    }

    this.removeFormError(this.possibleFormErrors.noTitle);
    return false;
  };

  render() {
    const { onToggleNewBoardForm } = this.props;
    const { title, chosenTheme, formErrors } = this.state;

    return (
      <NewBoardForm
        onToggleNewBoardForm={onToggleNewBoardForm}
        changeBoardTheme={this.changeBoardTheme}
        handleInputChange={this.handleInputChange}
        title={title}
        chosenTheme={chosenTheme}
        formErrors={formErrors}
        submitForm={this.submitNewBoard}
      />
    );
  }
}

NewBoardFormContainer.propTypes = {
  onToggleNewBoardForm: PropTypes.func.isRequired,
  onAddNewBoard: PropTypes.func.isRequired,
};
NewBoardFormContainer.defaultProps = {};

function mapDispatchToProps(dispatch) {
  return {
    onToggleNewBoardForm: () => dispatch(toggleNewBoardForm()),
    onAddNewBoard: board => dispatch(addNewBoard(board)),
  };
}

export default connect(null, mapDispatchToProps)(NewBoardFormContainer);
