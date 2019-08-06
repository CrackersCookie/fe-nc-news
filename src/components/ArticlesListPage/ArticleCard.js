import React from 'react';
import styles from './ArticleCard.module.css';
import { Link } from "@reach/router";

const ArticleCard = ({ articles }) => {
  return (
    <ul>
      {articles.map(article => {
        const { title, author, body, created_at, votes, comment_count, article_id } = article
        const date = new Date(created_at).toLocaleDateString()
        return (
          <li key={title} className={styles.article}>
            <h3>{title}</h3>
            <p>{body}</p>
            <p>Author: {author}</p>
            <p>Date: {date}</p>
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