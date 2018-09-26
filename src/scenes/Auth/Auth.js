import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login';
import SignUp from './SignUp';

import './Auth.css';
import logo from '../../images/logo.svg';

const Auth = () => (
  <div className="auth-wrapper">
    <div className="auth-forms-section">
      <div className="auth-logo">
        <img src={logo} alt="time organizer logo" />
      </div>
      <div className="auth-forms">
        <Switch>
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/sign-up" component={SignUp} />
        </Switch>
      </div>
    </div>
    <div className="auth-background-section" />
  </div>
);

export default Auth;
