import faker from 'faker';
import _ from 'lodash';

import { handleFetchArticle, handleArticleError } from '~services/article/articleHelper';
import { ArticleType } from '~types/Article';

export function fetchArticles (): Promise<void | ArticleType[]> {
  return new Promise<ArticleType[]>(resolve => {
    setTimeout(() => resolve(articles), 1500);
  })
    .then(e => handleFetchArticle(e))
    .catch(handleArticleError);
}

const articles = _.times(10, () => ({
  id: faker.random.uuid(),
  title: faker.random.word(),
  cover: faker.image.image(),
  hashtags: faker.random.words().split(' '),
  date: faker.date.recent(),
  slug: faker.company.companyName()
}));
