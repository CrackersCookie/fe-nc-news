import React from 'react';

const ArticleCard = (props) => {
  const { articles } = props
  return (
    <ul>
      {articles.map(article => {
        const { title, author, body, created_at } = article
        return (
          <li key={title}>
            <h3>{title}</h3>
            <p>{body}</p>
            <p>{author}</p>
            <p>{created_at}</p>
          </li>
        )
      })}
    </ul>
  );
};

export default ArticleCard;