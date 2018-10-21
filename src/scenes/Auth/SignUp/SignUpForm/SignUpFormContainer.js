import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import validator from 'validator';
import ReactRouterPropTypes from 'react-router-prop-types';

import SignUpForm from './SignUpForm';
import { addFormError } from '../../../../utilities/handleFormErrors';

import { signUp } from '../../actions';

class SignUpFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
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

  resetFormErrors = () => {
    this.setState({
      formErrors: [],
    });
  };

  isFormInvalid = () => {
    const { name, email, password } = this.state;

    if (name.length < 1) {
      this.addFormError('Provide a name');
      return true;
    }
    if (!validator.isEmail(email)) {
      this.addFormError('Provide a valid email');
      return true;
    }
    if (password.length < 3) {
      this.addFormError('Password must be at least 8 signs long');
      return true;
    }

    return false;
  };

  onSubmit = () => {
    const { signUpAction, history } = this.props;
    const { name, email, password } = this.state;
    const userData = {
      name,
      email,
      password,
    };
    this.resetFormErrors();

    if (!this.isFormInvalid()) {
      const onSuccess = () => history.replace('/app/boards');
      signUpAction(userData, onSuccess);
    }
  };

  render() {
    const { signUpServerError, isFetching } = this.props;
    const {
      name, email, password, formErrors,
    } = this.state;
    const values = {
      name,
      email,
      password,
    };

    return (
      <SignUpForm
        onSubmit={this.onSubmit}
        handleInputChange={this.handleInputChange}
        values={values}
        errorMessage={signUpServerError}
        formErrors={formErrors}
        isFetching={isFetching}
      />
    );
  }
}

SignUpFormContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  signUpServerError: PropTypes.string.isRequired,
  signUpAction: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};
SignUpFormContainer.defaultProps = {};

function mapStateToProps({ auth: { isFetching, signUpServerError } }) {
  return {
    isFetching,
    signUpServerError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signUpAction: (userData, onSuccess) => dispatch(signUp(userData, onSuccess)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUpFormContainer));
