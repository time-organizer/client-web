import { combineReducers } from 'redux';
import AuthReducer from '../scenes/Auth/reducer';
import GeneralReducer from '../scenes/generalReducer';
import UserReducer from '../scenes/App/components/UserSidebar/reducer';
import BoardsReducer from '../scenes/App/Boards/reducer';
import { USER_LOGOUT } from '../scenes/App/components/UserSidebar/actions';

const appReducer = combineReducers({
  auth: AuthReducer,
  general: GeneralReducer,
  user: UserReducer,
  boards: BoardsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
