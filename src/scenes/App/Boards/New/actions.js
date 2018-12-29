import get from 'lodash/get';

import APIService from '../../../../services/APIService';
import { toggleNewBoardForm } from '../../../generalActions';
import { fetchBoardsIfNeeded } from '../List/actions';

export const ADD_BOARD_REQUEST = 'ADD_BOARD_REQUEST';
export const ADD_BOARD_SUCCESS = 'ADD_BOARD_SUCCESS';
export const ADD_BOARD_FAUILURE = 'ADD_BOARD_FAUILURE';

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
