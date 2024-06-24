import { put, takeEvery } from 'redux-saga/effects';

import isEmpty from 'lodash/isEmpty';
import { FETCH_BOARDS_REQUEST, FETCH_BOARDS_SUCCESS, FETCH_BOARDS_FAILURE } from './actions';
import APIService from '../../../../services/APIService';
import { store } from '../../../../store/configureStore';

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

export function fetchBoardsIfNeeded() {
  if (shouldFetchBoards(store.getState())) {
    store.dispatch(fetchBoardsRequest());
  }
}

function* fetchBoards() {
  try {
    const boards = yield APIService.get('/api/boards');
    yield put({ type: FETCH_BOARDS_SUCCESS, boards: boards.data });
  } catch (error) {
    yield put({ type: FETCH_BOARDS_FAILURE, error });
  }
}

export function* watchFetchBoards() {
  yield takeEvery(FETCH_BOARDS_REQUEST, fetchBoards);
}
