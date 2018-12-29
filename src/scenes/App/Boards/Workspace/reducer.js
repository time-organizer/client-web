import * as actions from './actions';

export const initialState = {
  isFetching: false,
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

  default:
    return state;
  }
};

export default boards;
