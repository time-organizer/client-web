import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (process.env.NODE_ENV === 'production'
  || process.env.NODE_ENV === 'test')
  ? () => createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      applyMiddleware(sagaMiddleware),
    ),
  )
  : () => createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, createLogger()),
      applyMiddleware(sagaMiddleware),
    ),
  );

const store = configureStore();

export default store;
export { store, sagaMiddleware };
