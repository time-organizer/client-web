import { combineReducers } from 'redux';
import AuthReducer from '../scenes/Auth/reducer';
import GeneralReducer from '../scenes/generalReducer';
import UserReducer from '../scenes/App/components/UserSidebar/reducer';
import BoardsWorkspaceReducer from '../scenes/App/Boards/Workspace/reducer';
import BoardsNewReducer from '../scenes/App/Boards/New/reducer';
import BoardsListReducer from '../scenes/App/Boards/List/reducer';
import ColumnsWorkspaceReducer from '../scenes/App/Boards/Workspace/components/Columns/reducer';
import TasksWorkspaceReducer from '../scenes/App/Boards/Workspace/components/Tasks/reducer';
import LabelsReducer from '../scenes/App/Boards/Workspace/components/Labels/reducer';
import WidgetsReducer from '../scenes/App/Boards/Dashboard/components/Widgets/reducer';
import { USER_LOGOUT } from '../scenes/App/components/UserSidebar/actions';

const appReducer = combineReducers({
  auth: AuthReducer,
  general: GeneralReducer,
  user: UserReducer,
  boards: combineReducers({
    workspace: combineReducers({
      board: BoardsWorkspaceReducer,
      columns: ColumnsWorkspaceReducer,
      tasks: TasksWorkspaceReducer,
      labels: LabelsReducer,
      widgets: WidgetsReducer,
    }),
    new: BoardsNewReducer,
    list: BoardsListReducer,
  }),
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
