import { put, takeEvery } from 'redux-saga/effects';
import get from 'lodash/get';
import {
  FETCH_BOARD_FAILURE,
  FETCH_BOARD_REQUEST,
  FETCH_BOARD_SUCCESS, UPDATE_BOARD_FAILURE,
  UPDATE_BOARD_REQUEST,
  UPDATE_BOARD_SUCCESS,
} from './actions';
import APIService from '../../../../services/APIService';
import { store } from '../../../../store/configureStore';


function shouldFetchBoard(state, boardId) {
  const { boards: { workspace: { board: { data, didInvalidate, isFetching } } } } = state;

  if (isFetching) {
    return false;
  }

  if (!data) {
    return true;
  }

  if (get(data, '_id') !== boardId) {
    return true;
  }

  return didInvalidate;
}

function fetchBoardRequest(boardId) {
  return {
    type: FETCH_BOARD_REQUEST,
    boardId,
  };
}

export function fetchBoardIfNeeded(boardId) {
  if (shouldFetchBoard(store.getState(), boardId)) {
    store.dispatch(fetchBoardRequest(boardId));
  }
}

function* fetchBoard(params) {
  const { boardId } = params;

  try {
    const board = yield APIService.get(`/api/boards/${boardId}`);
    yield put({ type: FETCH_BOARD_SUCCESS, board: board.data });
  } catch (error) {
    yield put({ type: FETCH_BOARD_FAILURE });
  }
}

export function* watchFetchBoard() {
  yield takeEvery(FETCH_BOARD_REQUEST, fetchBoard);
}

export function* updateBoard(params) {
  const { boardId, newData } = params;

  try {
    const updatedBoard = APIService.put(`/api/boards/${boardId}`, {
      updatedObject: { ...newData },
    });
    yield put({
      type: UPDATE_BOARD_SUCCESS,
      boardId,
      updatedBoard: updatedBoard.data,
    });
  } catch (error) {
    yield put({ type: UPDATE_BOARD_FAILURE });
  }
}

export function* watchUpdateBoard() {
  yield takeEvery(UPDATE_BOARD_REQUEST, updateBoard);
}
