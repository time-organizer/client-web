import { combineReducers } from 'redux';
import AuthReducer from '../scenes/Auth/reducer';
import GeneralReducer from '../scenes/generalReducer';
import UserReducer from '../scenes/App/components/UserSidebar/reducer';
import BoardsReducer from '../scenes/App/scenes/Boards/reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  general: GeneralReducer,
  user: UserReducer,
  boards: BoardsReducer,
});

export default rootReducer;
