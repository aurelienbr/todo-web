// @flow
import { createSelector } from 'reselect';
import { getTotalArticleStats } from '~utils/articleUtils';
import { nullArticle } from '~types/Article';

const articlesSelector = state => state.fetchArticles.articles;
const brandsSelector = state => state.filterArticles.brands;
const typesSelector = state => state.filterArticles.types;
const targetsSelector = state => state.filterArticles.targets;
const sortsSelector = state => state.sortArticles;

export const articlesFilteredSelector: any = createSelector(
  articlesSelector,
  brandsSelector,
  typesSelector,
  targetsSelector,
  sortsSelector,
  (articles, brands, types, targets, sorts) => {
    const { performances, views, dates } = sorts;
    console.log({ articles, brands, types, targets, sorts });
    const filteredArticles = articles.filter(
      article =>
        (!brands || brands.length === 0 || brands.includes(article.brand.name)) &&
        (!types || types.length === 0 || types.includes(article.content_type)) &&
        (!targets || targets.length === 0 || targets.some(target => article.targets.find(articleTarget => articleTarget.id === target)))
    );
    console.log({ filteredArticles });

    if (!performances && !views && !dates) return filteredArticles;
    else
      return filteredArticles.sort((a, b) => {
        if (dates) {
          const aDate = new Date(a.created_at);
          const bDate = new Date(b.created_at);

          if (dates === 'desc') return aDate - bDate;
          else return bDate - aDate;
        }

        if (views) {
          const aViews = getTotalArticleStats(a).views;
          const bViews = getTotalArticleStats(b).views;

          if (views === 'desc') return bViews - aViews;
          else return aViews - bViews;
        }

        if (performances) {
          const aReachs = getTotalArticleStats(a).reachs;
          const bReachs = getTotalArticleStats(b).reachs;

          if (performances === 'desc') return bReachs - aReachs;
          else return aReachs - bReachs;
        }
        return 0;
      });
  }
);

export const articleSelector = (state: any, props: any) => state.fetchArticles.articles.find(article => article.slug === props.slug) || nullArticle;
