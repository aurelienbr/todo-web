// @flow
import { STATUS_START, STATUS_LOADING, STATUS_FAILURE, STATUS_SUCCESS, type Status } from '~types/Status';
import { FETCH_ARTICLES_START, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE } from '~actions/fetchArticlesActions';

import type { ArticleType } from '~types/Article';
import type { ActionType } from '~types/Actions';

export type State = {
  articles: Array<ArticleType>,
  status: Status,
  error: string,
};

const initialState: State = {
  articles: [],
  status: STATUS_START,
  error: '',
};

export default function(state: State = initialState, action: ActionType): State {
  switch (action.type) {
    case FETCH_ARTICLES_START:
      return {
        ...state,
        status: STATUS_LOADING,
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload.articles,
        status: STATUS_SUCCESS,
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        status: STATUS_FAILURE,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
