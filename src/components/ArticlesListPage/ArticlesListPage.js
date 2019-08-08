import React from "react";
import ArticlesList from "./ArticlesList";
import styles from "./ArticlesListPage.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Link } from "@reach/router";

const ArticlesListPage = ({ path, location, username, topic }) => {
  return (
    <section>
      {topic ? <h1>{topic}</h1> : path && <h1>all articles</h1>}
      <div className={styles.articlesList}>
        {location && location.state.article_id && (
          <p className={styles.deleted}>Article succesfully deleted</p>
        )}
        {path && (
          <>
            {username && (
              <div className={styles.buttonContainer}>
                <button className={styles.buttonPost}>
                  <Link to="/article">Post Article</Link>
                </button>
              </div>
            )}
          </>
        )}
        <ArticlesList path={path} topic={topic} />
      </div>
    </section>
  );
};

export default ArticlesListPage;
