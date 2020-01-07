// @flow
import type { Action as localeAction } from '~types/actions/localeActions';
import type { State as localeState } from '~reducers/localeReducer';

import type { Action as loginAction } from '~types/actions/loginActions';
import type { State as loginState } from '~reducers/loginReducer';

import type { Action as registerAction } from '~types/actions/registerActions';
import type { State as registerState } from '~reducers/registerReducer';

import type { Action as fetchArticlesAction } from '~types/actions/fetchArticlesActions';
import type { State as fetchArticlesState } from '~reducers/fetchArticlesReducer';

export type StateType = {
  locale: localeState,
  login: loginState,
  register: registerState,
  fetchArticles: fetchArticlesState,
  router: any,
};

export type ActionType = localeAction | loginAction | registerAction | fetchArticlesAction;
export type DispatchType = (action: ActionType) => any;
