/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AppRoot from './AppRoot';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <AppRoot />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
