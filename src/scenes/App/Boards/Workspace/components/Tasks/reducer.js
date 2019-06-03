import * as boardActions from '../../actions';
import * as actions from './actions';
import * as columnActions from '../Columns/actions';

export const initialState = {
  isFetching: false,
  serverError: '',
  data: {
    entries: {},
  },
};

const columns = (state = initialState, action) => {
  switch (action.type) {
  case actions.ADD_TASK_REQUEST:
    return Object.assign({}, state, {
      ...state,
      isFetching: true,
    });

  case actions.ADD_TASK_SUCCESS: {
    const { _id: taskId } = action.createdTask;

    return Object.assign({}, state, {
      ...state,
      data: {
        entries: {
          ...state.data.entries,
          [taskId]: action.createdTask,
        },
      },
      isFetching: false,
    });
  }

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
      },
      serverError: '',
    });

  case columnActions.REORDER_TASKS_SUCCESS: {
    return Object.assign({}, state, {
      ...state,
      data: {
        entries: {
          ...state.data.entries,
          [action.updatedTask._id]: action.updatedTask,
        },
      },
    });
  }

  default:
    return state;
  }
};

export default columns;
