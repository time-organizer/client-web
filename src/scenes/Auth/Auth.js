import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login';
import SignUp from './SignUp';

const Auth = () => (
  <div>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  </div>
);

export default Auth;
