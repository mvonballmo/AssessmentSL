import { useContext, useCallback, useMemo } from "react";
import { AppContext } from "./AppContext";
import {Article} from "./AppState";

type ItemProps = {
  article: Article;
};

export function Item({ article }: ItemProps) {
  const { state, service } = useContext(AppContext);
  const { article: selectedArticle } = state;

  const isSelected = article.id === selectedArticle?.id;

  const onClick = useCallback(() => {
    service.setArticle(article);
  }, []);

  return useMemo(
    () => (
      <>
        <a className={isSelected ? "selected" : ""} href="#" onClick={onClick}>
          {article.title}
        </a>
      </>
    ),
    [isSelected, article, onClick],
  );
}
