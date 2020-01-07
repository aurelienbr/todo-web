import { ArticleType } from '~types/Article';

export const FETCH_ARTICLES_START = 'FETCH_ARTICLES_START';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export type FETCH_ARTICLES_START_ACTION = {
  type: typeof FETCH_ARTICLES_START;
};

export type FETCH_ARTICLES_FAILURE_ACTION = {
  type: typeof FETCH_ARTICLES_FAILURE;
  payload: {
    error: string;
  };
};

export type FETCH_ARTICLES_SUCCESS_ACTION = {
  type: typeof FETCH_ARTICLES_SUCCESS;
  payload: {
    articles: Array<ArticleType>;
  };
};

export function fetchArticles (): FETCH_ARTICLES_START_ACTION {
  return {
    type: FETCH_ARTICLES_START
  };
}

export function fetchArticlesSuccess (articles: Array<ArticleType>): FETCH_ARTICLES_SUCCESS_ACTION {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: { articles }
  };
}

export function fetchArticlesFailure (error: string): FETCH_ARTICLES_FAILURE_ACTION {
  return {
    type: FETCH_ARTICLES_FAILURE,
    payload: {
      error
    }
  };
}

export type ActionTypes = FETCH_ARTICLES_START_ACTION | FETCH_ARTICLES_FAILURE_ACTION | FETCH_ARTICLES_SUCCESS_ACTION;
