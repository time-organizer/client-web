import * as actions from './actions';
import arrayToCollectionById from '../../../../utilities/arrayToCollectionById';

export const initialState = {
  didInvalidate: false,
  isFetching: false,
  boardsById: {},
  boardsServerError: '',
};

const boards = (state = initialState, action) => {
  switch (action.type) {
  case actions.FETCH_BOARDS_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
    });

  case actions.FETCH_BOARDS_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      boardsById: arrayToCollectionById(action.boards),
    });


  case actions.FETCH_BOARDS_FAILURE:
    return Object.assign({}, state, {
      boardsServerError: action.error,
    });

  default:
    return state;
  }
};

export default boards;
