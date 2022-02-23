export type Article = {
  id: number;
  rating: number;
  title: string;
  imageUrl?: string;
  comments: string[];
}

export type AppState = {
  article: Article | null;
  articles: Article[];
};
