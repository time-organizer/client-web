import { all } from 'redux-saga/effects';
import { watchFetchBoards } from '../scenes/App/Boards/List/sagas';
import { watchFetchBoard, watchUpdateBoard } from '../scenes/App/Boards/Workspace/sagas';

export default function* rootSaga() {
  yield all([
    watchFetchBoards(),
    watchFetchBoard(),
    watchUpdateBoard(),
  ]);
}
