import { Dispatch } from "react";
import {
  AppAction, CreateCreateCommentAction, CreateRateArticleAction, CreateSetArticleAction, CreateSetArticlesAction,
} from "./appFunctions";
import {AppState, Article} from "./AppState";

export class AppService {
  constructor(dispatch: Dispatch<AppAction>) {
    this.dispatch = dispatch;
  }

  setArticle(article: Article) {
    this.dispatch(CreateSetArticleAction(article));
  }

  async rateArticle(state: AppState, rating: number) {
    let article = state.article;
    if (!article) {
      throw new Error("The article must be assigned in order to be saved.");
    }

    article.rating = rating;

    // const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
    //
    // const data = await response.json();
    //
    //
//    article = (await state.crud.save(article)) as Article;

    this.dispatch(CreateRateArticleAction(rating));
  }

  addComment(comment: string) {
    this.dispatch(CreateCreateCommentAction(comment));
  }

  setArticles(articles: Article[]) {
    this.dispatch(CreateSetArticlesAction(articles));
  }

  private readonly dispatch: Dispatch<AppAction>;
}
