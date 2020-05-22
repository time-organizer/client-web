import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AppRoot from './AppRoot';
import { store } from './store/configureStore';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
      <BrowserRouter>
        <AppRoot store={store} />
      </BrowserRouter>
    )
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
