// @flow

import { takeLatest, put, call } from 'redux-saga/effects';
import { LOGIN_START, LOGIN_TOKEN_START, LOGIN_RESET, userLoginSuccess, userLoginFailed } from '~actions/loginActions';
import * as sessionService from '~services/authentication/authenticationService';
import type { Saga } from 'redux-saga';
import type { GeneratorType } from '~sagas/root';
import type { LOGIN_START_ACTION, LOGIN_TOKEN_START_ACTION, LOGIN_RESET_ACTION } from '~types/actions/loginActions';
import { push } from 'connected-react-router';

export default function* loginSaga(): GeneratorType {
  yield takeLatest(LOGIN_START, loginUser);
  yield takeLatest(LOGIN_TOKEN_START, loginUserWithToken);
  yield takeLatest(LOGIN_RESET, resetLogin);
}

function* loginUser(action: LOGIN_START_ACTION): Saga<void> {
  const { email, password } = action.payload;
  try {
    const token = yield call(sessionService.loginUser, email, password);

    yield put(userLoginSuccess(token));
  } catch (e) {
    yield put(userLoginFailed(e.message));
  }
}

function* loginUserWithToken(action: LOGIN_TOKEN_START_ACTION): Saga<void> {
  const { token } = action.payload;
  try {
    const refreshToken = yield call(sessionService.refreshToken, token);

    yield put(userLoginSuccess(refreshToken));
  } catch (e) {
    yield put(userLoginFailed(e.message));
  }
}

function* resetLogin(action: LOGIN_RESET_ACTION): Saga<void> {
  yield put(push('/'));
}
