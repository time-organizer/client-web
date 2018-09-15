import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Auth from './scenes/Auth';
import App from './scenes/App';

const AppRoot = () => (
  <Switch>
    <Route path="/auth" component={Auth} />
    <Route path="/app" component={App} />
    <Route patht="*" component={App} />
  </Switch>
);

export default AppRoot;
