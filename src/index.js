/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import AppRoot from './AppRoot';
import { store, sagaMiddleware } from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import history from './history';
import sagas from './sagas/index';

sagaMiddleware.run(sagas);

ReactDOM.render((
  <Router history={history}>
    <AppRoot store={store} />
  </Router>
), document.getElementById('root'));
registerServiceWorker();
