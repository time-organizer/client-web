import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Auth from './scenes/Auth';
import App from './scenes/App';

import './common_styles/global.css';

const AppRoot = ({ store }) => (
  <Provider store={store}>
    <Switch>
      <Route path="/auth" component={routeProps => <Auth {...routeProps} />} />
      <Route path="/" component={routeProps => <App {...routeProps} />} />
    </Switch>
  </Provider>
);

AppRoot.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default AppRoot;
