// @flow
// import api from '~services/api';
import { handleFetchArticle, handleArticleError } from '~services/article/articleHelper';
import faker from 'faker';
import _ from 'lodash';

export function fetchArticles(): Promise<*> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(articles), 1500);
  })
    .then(handleFetchArticle)
    .catch(handleArticleError);
}

const articles = _.times(10, () => ({
  id: faker.random.uuid(),
  title: faker.random.word(),
  cover: faker.image.image(),
  hashtags: faker.random.words().split(' '),
  date: faker.date.recent(),
}));
