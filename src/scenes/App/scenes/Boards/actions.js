import isEmpty from 'lodash/isEmpty';
import _ from 'lodash';
import get from 'lodash/get';

import APIService from '../../../../services/APIService';
import { toggleNewBoardForm } from '../../../generalActions';

export const FETCH_BOARDS_REQUEST = 'BOARDS_LIST_REQUEST';
export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS';
export const FETCH_BOARDS_FAILURE = 'FETCH_BOARDS_FAILURE';

export const ADD_BOARD_REQUEST = 'ADD_BOARD_REQUEST';
export const ADD_BOARD_SUCCESS = 'ADD_BOARD_SUCCESS';
export const ADD_BOARD_FAUILURE = 'ADD_BOARD_FAUILURE';

export const FETCH_BOARD_REQUEST = 'FETCH_BOARD_REQUEST';
export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';
export const FETCH_BOARD_FAILURE = 'FETCH_BOARD_FAILURE';

/*
==================== WORKSPACE =======================
*/

function shouldFetchBoard(state, id) {
  const { boards: { workspace: { isFetching, didInvalidate, board } } } = state;

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
          dispatch(fetchBoardFailure(_.get(error, 'response.data.message', '')));
        });
    }
  };
}

/*
==================== BOARDS LIST =======================
*/

function shouldFetchBoards(state) {
  const { boards: { list: { flatBoardsById, isFetching, didInvalidate } } } = state;

  if (isFetching) {
    return false;
  }

  if (isEmpty(flatBoardsById)) {
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
          dispatch(fetchBoardsFailure(_.get(error, 'response.data.message', '')));
        });
    }
  };
}

/*
==================== NEW BOARD =======================
*/

function addBoardRequest() {
  return {
    type: ADD_BOARD_REQUEST,
  };
}

function addBoardSuccess(board) {
  return {
    type: ADD_BOARD_SUCCESS,
    board,
  };
}

function addBoardFailure(error) {
  return {
    type: ADD_BOARD_FAUILURE,
    error,
  };
}

export function addNewBoard(board) {
  return (dispatch) => {
    dispatch(addBoardRequest());

    APIService.post('/api/boards', board)
      .then((newBoard) => {
        dispatch(addBoardSuccess(newBoard.data));
        dispatch(toggleNewBoardForm());
        dispatch(fetchBoardsIfNeeded());
      })
      .catch((error) => {
        dispatch(addBoardFailure(get(error, 'response.data.message', 'Something went wrong')));
      });
  };
}
