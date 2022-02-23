import React from "react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import { List } from "./List";
import { Detail } from "./Detail";

export function MasterDetail() {
  const { state, service } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function setEntities() {
      setLoading(true);

      // TODO Add timeout handling
      const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles");

      const data = await response.json();
      service.setArticles(data);
      setLoading(false);
    }

    setEntities().catch(e => {
      throw e;
    });
  }, []);

  return loading ? (
    <div>loading...</div>
  ) : (
    <>
      <nav>
        <List />
      </nav>
      <article>
        <Detail />
      </article>
    </>
  );
}
