import * as boardActions from '../../actions';
import * as actions from './actions';

export const initialState = {
  isFetching: false,
  serverError: '',
  tasksOrderBackup: {},
  data: {
    entries: {},
    tasksOrder: [],
  },
};

const columns = (state = initialState, action) => {
  switch (action.type) {
  case actions.ADD_TASK_REQUEST:
    return Object.assign({}, state, {
      ...state,
      isFetching: true,
    });

  case actions.ADD_TASK_SUCCESS:
    return Object.assign({}, state, {
      ...state,
      data: {
        entries: action.updatedBoard.tasks,
        tasksOrder: action.updatedBoard.tasksOrder,
      },
      isFetching: false,
    });

  case actions.ADD_TASK_FAILURE:
    return Object.assign({}, state, {
      ...state,
      serverError: action.error,
      isFetching: false,
    });

  case boardActions.FETCH_BOARD_SUCCESS:
    return Object.assign({}, state, {
      ...state,
      data: {
        entries: action.board.tasks,
        tasksOrder: action.board.tasksOrder,
      },
      serverError: '',
    });

  default:
    return state;
  }
};

export default columns;
