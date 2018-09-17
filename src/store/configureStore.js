import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';


const configureStore = (process.env === 'production')
  ? () => createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
    ),
  )
  : () => createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, createLogger()),
    ),
  );

export default configureStore;
