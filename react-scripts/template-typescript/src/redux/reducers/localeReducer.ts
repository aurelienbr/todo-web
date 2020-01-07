import { LOCALE_SET_LANGUAGE, ActionTypes } from '~actions/localeActions';

export type State = {
  language: 'fr' | 'en';
};

const initialState: State = {
  language: 'en'
};

export default function (state: State = initialState, action: ActionTypes): State {
  switch (action.type) {
    case LOCALE_SET_LANGUAGE:
      return {
        ...state,
        language: action.payload.language
      };
    default:
      return state;
  }
}
