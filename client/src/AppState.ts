export type Article = {
  id: number;
  rating: number;
  title: string;
  url: string;
  summary: string;
  imageUrl?: string;
  comments: string[];
}

export type AppState = {
  article: Article | null;
  articles: Article[];
};
