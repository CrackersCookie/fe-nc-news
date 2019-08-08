import React from "react";
import ArticlesList from "./ArticlesList";
import styles from "./ArticlesListPage.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ArticlesListPage = ({ path, location, topic, username }) => {
  return (
    <section className={styles.articlesPage}>
      {topic ? <h1>{topic}</h1> : path && <h1>all articles</h1>}
      <div>
        <ArticlesList
          path={path}
          topic={topic}
          location={location}
          username={username}
        />
      </div>
    </section>
  );
};

export default ArticlesListPage;
