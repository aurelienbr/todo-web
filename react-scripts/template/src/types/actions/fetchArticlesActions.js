// @flow

import type { ArticleType } from '~types/Article';

export type FETCH_ARTICLES_START_ACTION = {
  type: 'FETCH_ARTICLES_START',
};

export type FETCH_ARTICLES_FAILURE_ACTION = {
  type: 'FETCH_ARTICLES_FAILURE',
  payload: {
    error: string,
  },
};

export type FETCH_ARTICLES_SUCCESS_ACTION = {
  type: 'FETCH_ARTICLES_SUCCESS',
  payload: {
    articles: Array<ArticleType>,
  },
};

export type Action = FETCH_ARTICLES_START_ACTION | FETCH_ARTICLES_FAILURE_ACTION | FETCH_ARTICLES_SUCCESS_ACTION;
