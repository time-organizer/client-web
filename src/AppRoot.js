import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Auth from './scenes/Auth';
import App from './scenes/App';

import './common_styles/global.css';

const AppRoot = ({ store }) => (
  <Provider store={store}>
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/app" component={App} />
      <Redirect from="**" to="/app" />
    </Switch>
  </Provider>
);

AppRoot.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default AppRoot;
