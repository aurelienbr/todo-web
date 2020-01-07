import { fork, spawn, all } from 'redux-saga/effects';

import loginSaga from '~sagas/loginSaga';

export default function * () {
  yield fork(bootstrap);
}

function * bootstrap () {
  try {
    yield all([spawn(loginSaga)]);
  } catch (e) {
    // @TODO
  }
}
