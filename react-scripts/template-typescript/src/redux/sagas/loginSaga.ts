import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  LOGIN_START,
  LOGIN_TOKEN_START,
  LOGIN_RESET,
  userLoginSuccess,
  userLoginFailed,
  LOGIN_START_ACTION,
  LOGIN_TOKEN_START_ACTION
  // , LOGIN_RESET_ACTION
} from '~actions/loginActions';
import * as sessionService from '~services/authentication/authenticationService';

export default function * loginSaga () {
  yield takeLatest(LOGIN_START, loginUser);
  yield takeLatest(LOGIN_TOKEN_START, loginUserWithToken);
  yield takeLatest(LOGIN_RESET, resetLogin);
}

function * loginUser (action: LOGIN_START_ACTION) {
  const { email, password } = action.payload;
  try {
    const token = yield call(sessionService.loginUser, email, password);

    yield put(userLoginSuccess(token));
  } catch (e) {
    yield put(userLoginFailed(e.message));
  }
}

function * loginUserWithToken (action: LOGIN_TOKEN_START_ACTION) {
  const { token } = action.payload;
  try {
    const refreshToken = yield call(sessionService.refreshToken, token);

    yield put(userLoginSuccess(refreshToken));
  } catch (e) {
    yield put(userLoginFailed(e.message));
  }
}

function * resetLogin (/* action: LOGIN_RESET_ACTION */) {
  yield put(push('/'));
}
