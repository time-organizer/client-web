import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login';
import SignUp from './SignUp';

import './Auth.css';

const Auth = () => (
  <div className="auth-wrapper">
    <div className="auth-background" />
    <div className="auth-forms">
      <Switch>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/sign-up" component={SignUp} />
      </Switch>
    </div>
  </div>
);

export default Auth;
