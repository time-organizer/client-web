import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NewBoardForm from './NewBoardForm';
import { toggleNewBoardForm } from '../../../../../generalActions';
import addFormError from '../../../../../../utilities/addFormError';

class NewBoardFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      boardTheme: null,
      formErrors: [],
    };

    this.addFormError = addFormError.bind(this);
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  changeBoardTheme = (boardTheme) => {
    const { boardTheme: chosenTheme } = this.state;
    if (boardTheme === chosenTheme) {
      this.setState({ boardTheme: null });
      return;
    }

    this.setState({ boardTheme });
  };

  submitNewBoard = () => {
    if (this.isFormInvalid()) {
      return; // eslint-disable-line
    }
  };

  isFormInvalid = () => {
    const { title } = this.state;

    if (title.trim().length < 1) {
      this.addFormError('Please provide a title');
      return true;
    }

    return false;
  };

  render() {
    const { onToggleNewBoardForm } = this.props;
    const { title, boardTheme, formErrors } = this.state;

    return (
      <NewBoardForm
        onToggleNewBoardForm={onToggleNewBoardForm}
        changeBoardTheme={this.changeBoardTheme}
        handleInputChange={this.handleInputChange}
        values={{
          title,
          boardTheme,
        }}
        formErrors={formErrors}
        submitForm={this.submitNewBoard}
      />
    );
  }
}

NewBoardFormContainer.propTypes = {
  onToggleNewBoardForm: PropTypes.func.isRequired,
};
NewBoardFormContainer.defaultProps = {};

function mapDispatchToProps(dispatch) {
  return {
    onToggleNewBoardForm: () => dispatch(toggleNewBoardForm()),
  };
}

export default connect(null, mapDispatchToProps)(NewBoardFormContainer);
