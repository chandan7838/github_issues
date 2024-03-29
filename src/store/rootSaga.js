import {all, fork} from 'redux-saga/effects';

// Imports: Redux Sagas
import {watchIssues} from './issues/sagas';

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fork(watchIssues)]);
}
