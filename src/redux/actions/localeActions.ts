export const LOCALE_SET_LANGUAGE = 'LOCALE_SET_LANGUAGE';

export type LOCALE_SET_LANGUAGE_ACTION = {
  type: typeof LOCALE_SET_LANGUAGE;
  payload: {
    language: 'fr' | 'en';
  };
};

export function setLanguage (language: 'fr' | 'en'): LOCALE_SET_LANGUAGE_ACTION {
  return {
    type: LOCALE_SET_LANGUAGE,
    payload: { language }
  };
}

export type ActionTypes = LOCALE_SET_LANGUAGE_ACTION;
