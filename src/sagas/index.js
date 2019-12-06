import { all } from 'redux-saga/effects';
import { watchFetchBoards } from '../scenes/App/Boards/List/sagas';

export default function* rootSaga() {
  yield all([
    watchFetchBoards(),
  ]);
}
