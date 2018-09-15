import React, { Component } from 'react';

import APIService from '../../../../services/APIService';
import SignUpForm from './SignUpForm';

class SignUp extends Component {
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
    const { name, email, password } = this.state;
    const userData = {
      name,
      email,
      password,
    };

    APIService.post('/auth/sign-up', userData);
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <SignUpForm
        onSubmit={this.onSubmit}
        handleInputChange={this.handleInputChange}
        name={name}
        email={email}
        password={password}
      />
    );
  }
}

SignUp.propTypes = {};
SignUp.defaultProps = {};

export default SignUp;
