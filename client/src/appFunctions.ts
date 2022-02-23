import {AppState, Article} from "./AppState";

export const CreateSetArticleAction = (article: Article) => ({ type: "setArticle" as const, article });

export const CreateRateArticleAction = (rating: number) => ({ type: "rate" as const, rating });

export const CreateCreateCommentAction = (comment: string) => ({ type: "createComment" as const, comment });

export function CreateSetArticlesAction(articles: Article[]) {
  return { type: "setArticles" as const, articles };
}

export type AppAction =
  | ReturnType<typeof CreateSetArticleAction>
  | ReturnType<typeof CreateRateArticleAction>
  | ReturnType<typeof CreateCreateCommentAction>
  | ReturnType<typeof CreateSetArticlesAction>;

export function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "setArticle":
      return { ...state, article: action.article };
    case "rate": {
      const ratedArticle = state.article;
      if (!ratedArticle) {
        throw new Error("The article must be assigned in order to be rated.");
      }
      const { rating } = action;
      const newArticle = {
        ...ratedArticle,
        rating
      };

      return { ...state, article: newArticle };
    }
    case "createComment": {
      const ratedArticle = state.article;
      if (!ratedArticle) {
        throw new Error("The article must be assigned in order to be rated.");
      }
      const { comment } = action;
      const newArticle = {
        ...ratedArticle,
        comments: [
          ...ratedArticle.comments,
          comment
        ]
      };

      return { ...state, article: newArticle };
    }
    case "setArticles":
      return {
        ...state,
        articles: action.articles,
        article: action.articles.length > 0 ? action.articles[0] : null,
      };
  }
}

export function createInitialState(): AppState {
  return {
    articles: [],
    article: null,
  };
}
