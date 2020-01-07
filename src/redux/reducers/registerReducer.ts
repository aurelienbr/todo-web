import { REGISTER_START, REGISTER_FAILURE, REGISTER_SUCCESS, ActionTypes } from '~actions/registerActions';
import { STATUS_START, STATUS_LOADING, STATUS_FAILURE, STATUS_SUCCESS, Status } from '~types/Status';

export type State = {
  status: Status;
  error: string;
};

const initialState: State = {
  status: STATUS_START,
  error: ''
};

export default function (state: State = initialState, action: ActionTypes): State {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        status: STATUS_LOADING
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        status: STATUS_FAILURE,
        error: action.payload.error
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        status: STATUS_SUCCESS
      };
    default:
      return state;
  }
}
