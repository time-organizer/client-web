import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login';
import SignUp from './SignUp';

const Auth = () => (
  <Switch>
    <Route path="/auth/login" component={Login} />
    <Route path="/auth/sign-up" component={SignUp} />
  </Switch>
);

export default Auth;
