import { useContext, useCallback } from "react";
import { AppContext } from "./AppContext";
import { Item } from "./Item";

export function List() {
  const { state } = useContext(AppContext);
  const { articles } = state;

  const logClick = useCallback(() => console.log("selection changed"), []);

  return (
    <ul>
      {articles.map(a => (
        <Item key={a.id ?? 0} article={a} />
      ))}
    </ul>
  );
}
