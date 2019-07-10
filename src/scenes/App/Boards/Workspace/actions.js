import get from 'lodash/get';
import APIService from '../../../../services/APIService';

export const FETCH_BOARD_REQUEST = 'FETCH_BOARD_REQUEST';
export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';
export const FETCH_BOARD_FAILURE = 'FETCH_BOARD_FAILURE';

function shouldFetchBoard(state, id) {
  const { boards: { workspace: { board: { data, didInvalidate, isFetching } } } } = state;

  if (isFetching) {
    return false;
  }

  if (!data) {
    return true;
  }

  if (get(data, '_id') !== id) {
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

export const UPDATE_BOARD_REQUEST = 'UPDATE_BOARD_REQUEST';
export const UPDATE_BOARD_SUCCESS = 'UPDATE_BOARD_SUCCESS';
export const UPDATE_BOARD_FAILURE = 'UPDATE_BOARD_FAILURE';

function updateBoardRequest(boardId) {
  return {
    type: UPDATE_BOARD_REQUEST,
    boardId,
  };
}

function updateBoardSuccess(boardId, updatedBoard) {
  return {
    type: UPDATE_BOARD_SUCCESS,
    boardId,
    updatedBoard,
  };
}

function updateBoardFailure(boardId, error) {
  return {
    type: UPDATE_BOARD_FAILURE,
    boardId,
    error,
  };
}

export function updateBoard(boardId, newData) {
  return (dispatch) => {
    dispatch(updateBoardRequest(boardId));

    return APIService.put(`/api/boards/${boardId}`, {
      updatedObject: {
        ...newData,
      },
    })
      .then((updatedBoard) => {
        dispatch(updateBoardSuccess(boardId, updatedBoard.data));
      })
      .catch((error) => {
        dispatch(updateBoardFailure(boardId, error));
      });
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
