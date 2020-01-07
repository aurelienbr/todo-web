// @flow

import { fork, spawn, all } from 'redux-saga/effects';
import loginSaga from '~sagas/loginSaga';
import registerSaga from '~sagas/registerSaga';
import fetchArticlesSaga from '~sagas/fetchArticlesSaga';

export type GeneratorType = Generator<*, *, *>;

export default function*(): GeneratorType {
  yield fork(bootstrap);
}

function* bootstrap(): GeneratorType {
  try {
    yield all([spawn(loginSaga), spawn(registerSaga), spawn(fetchArticlesSaga)]);
  } catch (e) {
    // @TODO
  }
}
