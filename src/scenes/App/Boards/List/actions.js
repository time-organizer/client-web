import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

import APIService from '../../../../services/APIService';

export const FETCH_BOARDS_REQUEST = 'BOARDS_LIST_REQUEST';
export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS';
export const FETCH_BOARDS_FAILURE = 'FETCH_BOARDS_FAILURE';

function shouldFetchBoards(state) {
  const { boards: { list: { boardsById, isFetching, didInvalidate } } } = state;

  if (isFetching) {
    return false;
  }

  if (isEmpty(boardsById)) {
    return true;
  }

  return didInvalidate;
}

function fetchBoardsRequest() {
  return {
    type: FETCH_BOARDS_REQUEST,
  };
}

function fetchBoardsSuccess(boards) {
  return {
    type: FETCH_BOARDS_SUCCESS,
    boards,
  };
}

function fetchBoardsFailure(error) {
  return {
    type: FETCH_BOARDS_FAILURE,
    error,
  };
}

export function fetchBoardsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchBoards(getState())) {
      dispatch(fetchBoardsRequest());

      APIService.get('/api/boards')
        .then((boards) => {
          dispatch(fetchBoardsSuccess(boards.data));
        })
        .catch((error) => {
          dispatch(fetchBoardsFailure(get(error, 'response.data.message', '')));
        });
    }
  };
}
