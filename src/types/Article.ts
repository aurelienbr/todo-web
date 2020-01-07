export type ArticleType = {
  id: string;
  slug: string;
  title: string;
  cover: string;
  hashtags: Array<string>;
  date: Date;
};

export const nullArticle: ArticleType = {
  id: '',
  slug: '',
  title: '',
  cover: '',
  hashtags: [],
  date: new Date()
};
