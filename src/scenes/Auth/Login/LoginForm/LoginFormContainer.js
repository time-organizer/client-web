import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
import { login } from '../../actions';

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
    const { loginAction, history } = this.props;
    const { email, password } = this.state;
    const credentials = {
      email,
      password,
    };

    const onSuccess = () => history.replace('/app');
    loginAction(credentials, onSuccess);
  };

  render() {
    const { loginErrorMessage } = this.props;
    const { email, password } = this.state;

    return (
      <LoginForm
        onSubmit={this.onSubmit}
        handleInputChange={this.handleInputChange}
        email={email}
        password={password}
        errorMessage={loginErrorMessage}
      />
    );
  }
}

LoginFormContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  loginAction: PropTypes.func.isRequired,
  loginErrorMessage: PropTypes.string,
};

LoginFormContainer.defaultProps = {
  loginErrorMessage: '',
};

function mapStateToProps({ auth: { isFetching, loginErrorMessage } }) {
  return {
    isFetching,
    loginErrorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginAction: (userData, onSuccess) => dispatch(login(userData, onSuccess)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer));
