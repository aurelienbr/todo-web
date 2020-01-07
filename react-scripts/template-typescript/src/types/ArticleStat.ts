export type ArticleStatEntryType = {
  campaign: string;
  media: string;
  type: string;
  date: string;
  CTR: number;
  Clicks: number;
  Impressions: number;
  Cost: number;
  targets: string;
  combo: string;
};

export type ArticleStatType = {
  id: string;
  media: Array<string>;
  campaign: Array<string>;
  type: Array<string>;
  stats: Array<ArticleStatEntryType>;
};

export const nullArticleStat: ArticleStatType = {
  id: '',
  media: [],
  campaign: [],
  type: [],
  stats: []
};
