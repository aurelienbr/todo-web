import { takeLatest, put, call } from 'redux-saga/effects';

import { REGISTER_START, userRegisterSuccess, userRegisterFailed, REGISTER_START_ACTION } from '~actions/registerActions';
import * as sessionService from '~services/authentication/authenticationService';

export default function * registerSaga () {
  yield takeLatest(REGISTER_START, registerUser);
}

function * registerUser (action: REGISTER_START_ACTION) {
  const { email, firstname, lastname, password } = action.payload;
  try {
    yield call(sessionService.registerUser, email, firstname, lastname, password);
    yield put(userRegisterSuccess());
  } catch (e) {
    yield put(userRegisterFailed(e.message));
  }
}
