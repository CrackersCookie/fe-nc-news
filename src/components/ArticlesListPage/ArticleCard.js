import React from 'react';
import styles from './ArticleCard.module.css';
import { Link } from "@reach/router";

const ArticleCard = (props) => {
  const { articles } = props
  return (
    <ul>
      {articles.map(article => {
        const { title, author, body, created_at, votes, comment_count, article_id } = article
        return (
          <li key={title} className={styles.article}>
            <h3>{title}</h3>
            <p>{body}</p>
            <p>Author: {author}</p>
            <p>Date: {created_at}</p>
            <p>Votes: {votes}</p>
            <p>Comments: {comment_count}</p>
            <Link to={`/articles/${article_id}`}>
              <button>read article</button>
            </Link>
          </li>
        )
      })}
    </ul>
  );
};

export default ArticleCard;