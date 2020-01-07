// @flow
import type { UserProfileType } from '~types/User';

export type LOGIN_START_ACTION = {
  type: 'LOGIN_START',
  payload: {
    email: string,
    password: string,
  },
};

export type LOGIN_TOKEN_START_ACTION = {
  type: 'LOGIN_TOKEN_START',
  payload: {
    token: string,
  },
};

export type LOGIN_FAILURE_ACTION = {
  type: 'LOGIN_FAILURE',
  payload: {
    error: string,
  },
};

export type LOGIN_SUCCESS_ACTION = {
  type: 'LOGIN_SUCCESS',
  payload: {
    token: string,
    profile: UserProfileType,
  },
};

export type LOGIN_RESET_ACTION = {
  type: 'LOGIN_RESET',
};

export type Action = LOGIN_START_ACTION | LOGIN_TOKEN_START_ACTION | LOGIN_SUCCESS_ACTION | LOGIN_FAILURE_ACTION | LOGIN_RESET_ACTION;
