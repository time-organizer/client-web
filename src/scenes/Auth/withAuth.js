import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import AuthService from '../../services/AuthService';

const withAuth = (WrappedComponent) => {
  class AuthComponent extends Component {
    componentWillMount() {
      const { history } = this.props;

      if (!AuthService.loggedIn()) {
        history.replace('/auth/login');
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  AuthComponent.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
  };

  return AuthComponent;
};

export default withAuth;
