// import get from 'lodash/get';
import * as boardActions from '../../actions';
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
  // case actions.UPDATE_COLUMNS_ORDER_REQUEST:
  //   return Object.assign({}, state, {
  //     ...state,
  //     columnsOrderBackup: get(state, 'state.data.columnsOrder'),
  //   });

  case actions.ADD_COLUMN_REQUEST:
    return Object.assign({}, state, {
      ...state,
      isFetching: true,
    });

  case actions.ADD_COLUMN_SUCCESS:
    return Object.assign({}, state, {
      ...state,
      data: {
        entries: action.updatedBoard.columns,
        columnsOrder: action.updatedBoard.columnsOrder,
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
        entries: action.board.columns,
        columnsOrder: action.board.columnsOrder,
      },
      serverError: '',
    });

  default:
    return state;
  }
};

export default columns;
