import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './common_styles/global.css';
import Loader from './scenes/components/Loaders/Loader';

const Auth = lazy(() => import('./scenes/Auth'));
const App = lazy(() => import('./scenes/App'));

const AppRoot = ({ store }) => (
  <Provider store={store}>
    <Suspense fallback={
      <Loader fullScreen text="Loading" />}
    >
      <Switch>
        <Route path="/auth" component={routeProps => <Auth {...routeProps} />} />
        <Route path="/" component={routeProps => <App {...routeProps} />} />
      </Switch>
    </Suspense>
  </Provider>
);

AppRoot.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default AppRoot;
