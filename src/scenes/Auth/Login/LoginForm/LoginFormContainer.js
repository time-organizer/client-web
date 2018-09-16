import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import APIService from '../../../../services/APIService';
import AuthService from '../../../../services/AuthService';
import LoginForm from './LoginForm';

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    const { email, password } = this.state;
    const userData = {
      email,
      password,
    };

    APIService.post('/auth/login', userData)
      .then((res) => {
        const { history } = this.props;
        const { token } = res.data;

        AuthService.setToken(token);
        history.replace('/app');
      });
  };

  render() {
    const { email, password } = this.state;

    return (
      <LoginForm
        onSubmit={this.onSubmit}
        handleInputChange={this.handleInputChange}
        email={email}
        password={password}
      />
    );
  }
}

LoginFormContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(LoginFormContainer);
