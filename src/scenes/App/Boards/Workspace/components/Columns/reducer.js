import get from 'lodash/get';
import pickBy from 'lodash/pickBy';
import * as boardActions from '../../actions';
import * as taskActions from '../Tasks/actions';
import * as actions from './actions';
import updatedColumns from './utilities/updateColumnsState';

export const initialState = {
  isFetching: false,
  serverError: '',
  columnsOrderBackup: [],
  columnsUpdateBackup: {},
  data: {
    entries: {},
    columnsOrder: [],
  },
};

const columns = (state = initialState, action) => {
  switch (action.type) {
  case actions.UPDATE_COLUMNS_ORDER_REQUEST:
    return Object.assign({}, state, {
      columnsOrderBackup: get(state, 'data.columnsOrder'),
      data: {
        ...state.data,
        columnsOrder: action.newOrder,
      },
    });

  case actions.UPDATE_COLUMNS_ORDER_SUCCESS:
    return Object.assign({}, state, {
      columnsOrderBackup: [],
    });

  case actions.UPDATE_COLUMNS_ORDER_FAILURE:
    return Object.assign({}, state, {
      data: {
        ...state.data,
        columnsOrder: state.columnsOrderBackup,
      },
      columnsOrderBackup: [],
    });

  case actions.ADD_COLUMN_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
    });

  case actions.ADD_COLUMN_SUCCESS:
    return Object.assign({}, state, {
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
      serverError: action.error,
      isFetching: false,
    });

  case boardActions.FETCH_BOARD_SUCCESS:
    return Object.assign({}, state, {
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

  case actions.UPDATE_COLUMN_REQUEST: {
    const { columnId, newData } = action;
    const oldColumnState = state.data.entries[columnId];

    return Object.assign({}, state, {
      columnsUpdateBackup: {
        ...state.columnBackup,
        [action.columnId]: oldColumnState,
      },
      data: {
        ...state.data,
        entries: {
          ...state.data.entries,
          [columnId]: {
            ...state.data.entries[columnId],
            ...newData,
          },
        },
      },
    });
  }

  case actions.UPDATE_COLUMN_SUCCESS:
    return Object.assign({}, state, {
      columnsUpdateBackup: pickBy(state.columnBackup,
        columnBackupEntry => columnBackupEntry._id !== action.updatedColumn._id),
    });

  case actions.UPDATE_COLUMN_FAILURE: {
    const { columnId } = action;
    const columnBackup = state.columnsUpdateBackup[columnId];

    return Object.assign({}, state, {
      columnsUpdateBackup: pickBy(state.columnBackup,
        columnBackupEntry => columnBackupEntry._id !== action.columnId),
      data: {
        ...state.data,
        entries: {
          ...state.data.entries,
          [columnId]: {
            ...state.data.entries[columnId],
            ...columnBackup,
          },
        },
      },
    });
  }

  case actions.REORDER_TASKS_REQUEST: {
    const { reorder } = action;
    const { columnDestinationId, columnSourceId } = reorder;

    const sourceColumn = state.data.entries[columnSourceId];
    const destinationColumn = state.data.entries[columnDestinationId];

    const oldColumnsStates = {
      [columnSourceId]: sourceColumn,
      [columnDestinationId]: destinationColumn,
    };

    return Object.assign({}, state, {
      columnsUpdateBackup: {
        ...state.columnsUpdateBackup,
        ...oldColumnsStates,
      },
      data: {
        ...state.data,
        entries: {
          ...state.data.entries,
          ...updatedColumns(oldColumnsStates, reorder),
        },
      },
    });
  }

  case actions.REORDER_TASKS_SUCCESS: {
    return Object.assign({}, state, {
      columnsUpdateBackup: pickBy(state.columnsUpdateBackup,
        columnBackupEntry => columnBackupEntry._id !== action.reorder.columnSourceId
          && columnBackupEntry._id !== action.reorder.columnDestinationId),
    });
  }

  case actions.REORDER_TASKS_FAILURE: {
    const { reorder } = action;
    const {
      columnDestinationId, columnSourceId,
    } = reorder;

    const sourceColumn = state.columnsUpdateBackup[columnSourceId];
    const destinationColumn = state.columnsUpdateBackup[columnDestinationId];

    return Object.assign({}, state, {
      columnsUpdateBackup: pickBy(state.columnBackup,
        columnBackupEntry => columnBackupEntry._id !== action.columnId),
      data: {
        ...state.data,
        entries: {
          ...state.data.entries,
          [columnSourceId]: sourceColumn,
          [columnDestinationId]: destinationColumn,
        },
      },
    });
  }

  default:
    return state;
  }
};

export default columns;
