export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export type REGISTER_START_ACTION = {
  type: typeof REGISTER_START;
  payload: {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
  };
};

export type REGISTER_FAILURE_ACTION = {
  type: typeof REGISTER_FAILURE;
  payload: {
    error: string;
  };
};

export type REGISTER_SUCCESS_ACTION = {
  type: typeof REGISTER_SUCCESS;
};

export function registerUser (email: string, firstname: string, lastname: string, password: string) {
  return {
    type: REGISTER_START,
    payload: {
      email,
      firstname,
      lastname,
      password
    }
  };
}

export function userRegisterFailed (error: string) {
  return {
    type: REGISTER_FAILURE,
    payload: {
      error
    }
  };
}

export function userRegisterSuccess () {
  return {
    type: REGISTER_SUCCESS
  };
}

export type ActionTypes = REGISTER_START_ACTION | REGISTER_SUCCESS_ACTION | REGISTER_FAILURE_ACTION;
