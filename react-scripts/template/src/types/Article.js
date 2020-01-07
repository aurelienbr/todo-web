// @flow

export type ArticleType = {
  id: string,
  title: string,
  cover: string,
  hashtags: Array<string>,
  date: Date,
};

export const nullArticle: ArticleType = {
  id: '',
  title: '',
  cover: '',
  hashtags: [],
  date: new Date(),
};
