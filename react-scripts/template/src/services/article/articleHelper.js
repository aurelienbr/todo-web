// @flow
import type { ArticleType } from '~types/Article';
import ServiceError from '~services/ServiceError';
// eslint-disable-next-line
export function handleArticleError(error: any) {
  throw new ServiceError('Une erreur est survenue, veuillez réessayer', error.response.status);
}

export function handleFetchArticle(articles: Array<ArticleType>): Array<ArticleType> {
  return articles;
}
