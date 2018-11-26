import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AppRoot from './AppRoot';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render((
  <BrowserRouter>
    <AppRoot store={store} />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
