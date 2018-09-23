import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login';
import SignUp from './SignUp';

import './Auth.css';

const Auth = () => (
  <div className="auth-wrapper">
    <div className="auth-forms-section">
      <div className="auth-forms">
        {/* <div className="auth-logo">Time organizer</div> */}
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
