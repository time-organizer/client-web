import { combineReducers } from 'redux';
import AuthReducer from '../scenes/Auth/reducer';
import GeneralReducer from '../scenes/generalReducer';
import UserReducer from '../scenes/App/components/UserSidebar/reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  general: GeneralReducer,
  user: UserReducer,
});

export default rootReducer;
