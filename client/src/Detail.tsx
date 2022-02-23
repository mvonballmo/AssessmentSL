import { MouseEvent, useContext } from "react";
import { AppContext } from "./AppContext";

export function Detail() {
  const { state, service } = useContext(AppContext);
  const { article } = state;

  const rateEntity = async (e: MouseEvent<HTMLButtonElement>, rating: number) => {
    await service.rateArticle(state, rating);
    e.preventDefault();
  };

  const addComment = async (e: MouseEvent<HTMLButtonElement>, comment: string) => {
    await service.addComment(comment);
    e.preventDefault();
  };

  return !article ? (
    <div>Nothing selected</div>
  ) : (
      <>
          <h2><a href={article.url}>{article.title}</a></h2>
          <p>
              <button onClick={e => rateEntity(e, 5)}>Rate as 5/5</button>
              <button onClick={e => addComment(e, "comment")}>Add comment</button>
          </p>
          <div className="text">
              {article.imageUrl ? <img src={article.imageUrl}/> : ""}
              <p>{article.summary}</p>
              <ul>
                  <li>Id: {article.id}</li>
                  <li>Rating: {article.rating}</li>
              </ul>
              <h3>Comments</h3>
              <ul>
                  {article.comments.map(c => <li>{c}</li>)}
              </ul>
          </div>
      </>
  );
}
