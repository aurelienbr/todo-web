// @flow

export type REGISTER_START_ACTION = {
  type: 'REGISTER_START',
  payload: {
    email: string,
    firstname: string,
    lastname: string,
    password: string,
  },
};

export type REGISTER_FAILURE_ACTION = {
  type: 'REGISTER_FAILURE',
  payload: {
    error: string,
  },
};

export type REGISTER_SUCCESS_ACTION = {
  type: 'REGISTER_SUCCESS',
};

export type Action = REGISTER_START_ACTION | REGISTER_SUCCESS_ACTION | REGISTER_FAILURE_ACTION;
