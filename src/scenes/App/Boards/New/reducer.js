import * as actions from './actions';

export const initialState = {
  isFetching: false,
  newBoardServerError: '',
};

const boards = (state = initialState, action) => {
  switch (action.type) {
  case actions.ADD_BOARD_REQUEST:
    return Object.assign({}, state, {
      ...state,
      isFetching: true,
    });

  case actions.ADD_BOARD_SUCCESS:
    return Object.assign({}, state, {
      ...state,
      isFetching: false,
    });

  case actions.ADD_BOARD_FAUILURE:
    return Object.assign({}, state, {
      isFetching: false,
      newBoardServerError: action.error,
    });
  default:
    return state;
  }
};

export default boards;
