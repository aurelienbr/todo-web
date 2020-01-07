import { fork, spawn, all } from 'redux-saga/effects';

import loginSaga from '~sagas/loginSaga';
import registerSaga from '~sagas/registerSaga';
import fetchArticlesSaga from '~sagas/fetchArticlesSaga';

export default function * () {
  yield fork(bootstrap);
}

function * bootstrap () {
  try {
    yield all([spawn(loginSaga), spawn(registerSaga), spawn(fetchArticlesSaga)]);
  } catch (e) {
    // @TODO
  }
}
