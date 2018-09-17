import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignUpForm from './SignUpForm';

import { signUp } from '../../actions';

class SignUpFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = () => {
    const { signUpAction } = this.props;
    const { name, email, password } = this.state;
    const userData = {
      name,
      email,
      password,
    };

    signUpAction(userData);
  };

  render() {
    const { isFetching, signUpErrorMessage } = this.props;
    const { name, email, password } = this.state;

    return !isFetching
      ? (
        <SignUpForm
          onSubmit={this.onSubmit}
          handleInputChange={this.handleInputChange}
          name={name}
          email={email}
          password={password}
          errorMessage={signUpErrorMessage}
        />
      )
      : (
        <div>Loading</div>
      );
  }
}

SignUpFormContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  signUpErrorMessage: PropTypes.string.isRequired,
  signUpAction: PropTypes.func.isRequired,
};
SignUpFormContainer.defaultProps = {};

function mapStateToProps({ auth: { isFetching, signUpErrorMessage } }) {
  return {
    isFetching,
    signUpErrorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signUpAction: userData => dispatch(signUp(userData)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormContainer);
