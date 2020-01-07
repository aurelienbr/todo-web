import { LOGIN_START, LOGIN_TOKEN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_RESET, ActionTypes } from '~actions/loginActions';
import { STATUS_START, STATUS_LOADING, STATUS_FAILURE, STATUS_SUCCESS, Status } from '~types/Status';
export type State = {
  token: string | null;
  status: Status;
  error: string;
};

const initialState: State = {
  token: null,
  error: '',
  status: STATUS_START
};

export default function (state: State = initialState, action: ActionTypes): State {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        status: STATUS_LOADING
      };
    case LOGIN_TOKEN_START:
      return {
        ...state,
        status: STATUS_LOADING
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        status: STATUS_SUCCESS
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        token: initialState.token,
        status: STATUS_FAILURE
      };
    case LOGIN_RESET:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
}
