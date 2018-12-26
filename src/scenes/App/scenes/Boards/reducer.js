import * as actions from './actions';
import arrayToCollectionById from '../../../../utilities/arrayToCollectionById';

export const initialState = {
  list: {
    isFetching: false,
    flatBoardsById: {},
    serverError: '',
    didInvalidate: false,
  },
  workspace: {
    isFetching: false,
    board: null,
    didInvalidate: false,
    serverError: '',
  },
  new: {
    isFetching: false,
    newBoardServerError: '',
  },
};

const boards = (state = initialState, action) => {
  switch (action.type) {
  case actions.FETCH_BOARDS_REQUEST:
    return Object.assign({}, state, {
      list: {
        ...state.list,
        isFetching: true,
      },
    });

  case actions.FETCH_BOARDS_SUCCESS:
    return Object.assign({}, state, {
      list: {
        ...state.list,
        isFetching: false,
        didInvalidate: false,
        flatBoardsById: arrayToCollectionById(action.boards),
        serverError: '',
      },
    });

  case actions.FETCH_BOARDS_FAILURE:
    return Object.assign({}, state, {
      list: {
        ...state.list,
        serverError: action.error,
        isFetching: false,
      },
    });

  case actions.FETCH_BOARD_REQUEST:
    return Object.assign({}, state, {
      workspace: {
        ...state.workspace,
        isFetching: true,
      },
    });

  case actions.FETCH_BOARD_SUCCESS:
    return Object.assign({}, state, {
      workspace: {
        ...state.workspace,
        isFetching: false,
        didInvalidate: false,
        board: action.board,
        serverError: '',
      },
    });

  case actions.FETCH_BOARD_FAILURE:
    return Object.assign({}, state, {
      workspace: {
        ...state.workspace,
        isFetching: false,
        serverError: action.error,
      },
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
      list: {
        ...state.list,
        didInvalidate: true,
        flatBoardsById: {
          ...state.flatBoardsById,
        },
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
