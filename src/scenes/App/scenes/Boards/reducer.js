import * as actions from './actions';
import arrayToCollectionById from '../../../../utilities/arrayToCollectionById';

export const initialState = {
  didInvalidate: false,
  isFetching: false,
  boardsById: {},
  boardsServerError: '',
  new: {
    isFetching: false,
    newBoardServerError: '',
  },
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

  case actions.ADD_BOARD_REQUEST:
    return Object.assign({}, state, {
      new: {
        ...state.new,
        isFetching: true,
      },
    });

  case actions.ADD_BOARD_SUCCESS:
    return Object.assign({}, state, {
      boardsById: {
        ...state.boardsById,
        [action.board._id]: action.board,
      },
      new: {
        ...state.new,
        isFetching: false,
      },
    });

  case actions.ADD_BOARD_FAUILURE:
    return Object.assign({}, state, {
      new: {
        isFetching: false,
        newBoardServerError: action.error,
      },
    });
  default:
    return state;
  }
};

export default boards;
