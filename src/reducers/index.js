import { combineReducers } from 'redux';
import AuthReducer from '../scenes/Auth/reducer';
import GeneralReducer from '../scenes/generalReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  general: GeneralReducer,
});

export default rootReducer;
