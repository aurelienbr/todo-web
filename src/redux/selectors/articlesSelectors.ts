import { createSelector } from 'reselect';

import { nullArticle } from '~types/Article';
import { StateType } from '~reducers/index';

const articlesSelector = (state: StateType) => state.fetchArticles.articles;

export const articlesFilteredSelector = createSelector(articlesSelector, articles => {
  return articles;
});

export const articleSelector = (state: StateType, props: { slug: string }) =>
  state.fetchArticles.articles.find(article => article.slug === props.slug) || nullArticle;
