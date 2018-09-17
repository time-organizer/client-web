import { combineReducers } from 'redux';
import AuthReducer from '../scenes/Auth/reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export default rootReducer;
