// @flow

export const LOCALE_SET_LANGUAGE = 'LOCALE_SET_LANGUAGE';

export function setLanguage(language: string) {
  return {
    type: LOCALE_SET_LANGUAGE,
    payload: { language },
  };
}
