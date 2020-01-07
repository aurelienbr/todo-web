// @flow
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export function registerUser(email: string, firstname: string, lastname: string, password: string) {
  return {
    type: REGISTER_START,
    payload: {
      email,
      firstname,
      lastname,
      password,
    },
  };
}

export function userRegisterFailed(error: string) {
  return {
    type: REGISTER_FAILURE,
    payload: {
      error,
    },
  };
}

export function userRegisterSuccess() {
  return {
    type: REGISTER_SUCCESS,
  };
}
