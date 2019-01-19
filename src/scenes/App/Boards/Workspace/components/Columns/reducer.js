import get from 'lodash/get';
import * as boardActions from '../../actions';
import * as taskActions from '../Tasks/actions';
import * as actions from './actions';

export const initialState = {
  isFetching: false,
  serverError: '',
  columnsOrderBackup: [],
  data: {
    entries: {},
    columnsOrder: [],
  },
};

const columns = (state = initialState, action) => {
  switch (action.type) {
  case actions.UPDATE_COLUMNS_ORDER_REQUEST:
    return Object.assign({}, state, {
      ...state,
      columnsOrderBackup: get(state, 'data.columnsOrder'),
      data: {
        ...state.data,
        columnsOrder: action.newOrder,
      },
    });

  case actions.UPDATE_COLUMNS_ORDER_SUCCESS:
    return Object.assign({}, state, {
      ...state,
      columnsOrderBackup: [],
    });

  case actions.UPDATE_COLUMNS_ORDER_FAILURE:
    return Object.assign({}, state, {
      ...state,
      data: {
        ...state.data,
        columnsOrder: state.columnsOrderBackup,
      },
      columnsOrderBackup: [],
    });

  case actions.ADD_COLUMN_REQUEST:
    return Object.assign({}, state, {
      ...state,
      isFetching: true,
    });

  case actions.ADD_COLUMN_SUCCESS:
    return Object.assign({}, state, {
      ...state,
      data: {
        ...state.data,
        entries: {
          ...state.data.entries,
          [action.updatedColumn._id]: action.updatedColumn,
        },
        columnsOrder: [
          ...state.data.columnsOrder,
          action.updatedColumn._id,
        ],
      },
      isFetching: false,
    });

  case actions.ADD_COLUMN_FAILURE:
    return Object.assign({}, state, {
      ...state,
      serverError: action.error,
      isFetching: false,
    });

  case boardActions.FETCH_BOARD_SUCCESS:
    return Object.assign({}, state, {
      ...state,
      data: {
        ...state.data,
        entries: action.board.columns,
        columnsOrder: action.board.columnsOrder,
      },
      serverError: '',
    });

  case taskActions.ADD_TASK_SUCCESS: {
    const { columnId, _id: taskId } = action.createdTask;

    return Object.assign({}, state, {
      ...state,
      data: {
        ...state.data,
        entries: {
          ...state.data.entries,
          [columnId]: {
            ...state.data.entries[columnId],
            tasksOrder: [
              ...state.data.entries[columnId].tasksOrder,
              taskId,
            ],
          },
        },
      },
    });
  }

  default:
    return state;
  }
};

export default columns;
