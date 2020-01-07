// @flow

import type { ArticleType } from '~types/Article';

export const FETCH_ARTICLES_START = 'FETCH_ARTICLES_START';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export function fetchArticles() {
  return {
    type: FETCH_ARTICLES_START,
  };
}

export function fetchArticlesSuccess(articles: Array<ArticleType>) {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: { articles },
  };
}

export function fetchArticlesFailure(error: string) {
  return {
    type: FETCH_ARTICLES_FAILURE,
    payload: {
      error,
    },
  };
}
