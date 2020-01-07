// @flow

import { LOCALE_SET_LANGUAGE } from '~actions/localeActions';

import type { ActionType } from '~types/Actions';

export type State = {
  language: string,
};

const initialState: State = {
  language: 'en',
};

export default function(state: State = initialState, action: ActionType): State {
  switch (action.type) {
    case LOCALE_SET_LANGUAGE:
      return {
        ...state,
        language: action.payload.language,
      };
    default:
      return state;
  }
}
