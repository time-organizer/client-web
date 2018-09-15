import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AppRoot from '../AppRoot';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
      <BrowserRouter>
        <AppRoot />
      </BrowserRouter>
    )
    , div);
  ReactDOM.unmountComponentAtNode(div);

});
