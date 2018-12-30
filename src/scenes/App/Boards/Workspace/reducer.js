import * as actions from './actions';
import * as columnActions from './components/Columns/actions';

export const initialState = {
  isFetching: false,
  isFetchingColumns: false,
  didInvalidate: false,
  serverError: '',
  data: null,
};

const boards = (state = initialState, action) => {
  switch (action.type) {
  case actions.FETCH_BOARD_REQUEST:
    return Object.assign({}, state, {
      ...state,
      isFetching: true,
    });

  case actions.FETCH_BOARD_SUCCESS:
    return Object.assign({}, state, {
      ...state,
      isFetching: false,
      didInvalidate: false,
      data: action.board,
      serverError: '',
    });

  case actions.FETCH_BOARD_FAILURE:
    return Object.assign({}, state, {
      ...state,
      isFetching: false,
      serverError: action.error,
    });

  case columnActions.ADD_COLUMN_REQUEST:
    return Object.assign({}, state, {
      ...state,
      isFetchingColumns: true,
    });

  case columnActions.ADD_COLUMN_SUCCESS:
    return Object.assign({}, state, {
      ...state,
      data: action.updatedBoard,
      isFetchingColumns: false,
    });

  case columnActions.ADD_COLUMN_FAILURE:
    return Object.assign({}, state, {
      ...state,
      serverError: action.error,
      isFetchingColumns: false,
    });

  default:
    return state;
  }
};

export default boards;
