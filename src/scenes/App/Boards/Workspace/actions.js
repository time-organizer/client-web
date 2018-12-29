import get from 'lodash/get';
import APIService from '../../../../services/APIService';

export const FETCH_BOARD_REQUEST = 'FETCH_BOARD_REQUEST';
export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';
export const FETCH_BOARD_FAILURE = 'FETCH_BOARD_FAILURE';

function shouldFetchBoard(state, id) {
  const { boards: { list: { isFetching, didInvalidate, board } } } = state;

  if (isFetching) {
    return false;
  }

  if (!board) {
    return true;
  }

  if (board.id !== id) {
    return true;
  }

  return didInvalidate;
}

function fetchBoardRequest() {
  return {
    type: FETCH_BOARD_REQUEST,
  };
}

function fetchBoardSuccess(board) {
  return {
    type: FETCH_BOARD_SUCCESS,
    board,
  };
}

function fetchBoardFailure(error) {
  return {
    type: FETCH_BOARD_FAILURE,
    error,
  };
}

export function fetchBoardIfNeeded(id) {
  return (dispatch, getState) => {
    if (shouldFetchBoard(getState(), id)) {
      dispatch(fetchBoardRequest());

      APIService.get(`/api/boards/${id}`)
        .then((boards) => {
          dispatch(fetchBoardSuccess(boards.data));
        })
        .catch((error) => {
          dispatch(fetchBoardFailure(get(error, 'response.data.message', '')));
        });
    }
  };
}
