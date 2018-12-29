import * as actions from './actions';
import { ADD_BOARD_SUCCESS } from '../New/actions';
import arrayToCollectionById from '../../../../utilities/arrayToCollectionById';

export const initialState = {
  isFetching: false,
  boardsById: {},
  serverError: '',
  didInvalidate: false,
};

const boards = (state = initialState, action) => {
  switch (action.type) {
  case actions.FETCH_BOARDS_REQUEST:
    return Object.assign({}, state, {
      ...state,
      isFetching: true,
    });

  case actions.FETCH_BOARDS_SUCCESS:
    return Object.assign({}, state, {
      ...state,
      isFetching: false,
      didInvalidate: false,
      boardsById: arrayToCollectionById(action.boards),
      serverError: '',
    });

  case actions.FETCH_BOARDS_FAILURE:
    return Object.assign({}, state, {
      ...state,
      serverError: action.error,
      isFetching: false,
    });

  case ADD_BOARD_SUCCESS:
    return Object.assign({}, state, {
      ...state,
      didInvalidate: true,
    });
  default:
    return state;
  }
};

export default boards;
