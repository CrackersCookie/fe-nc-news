import React from 'react';

const ArticleLayout = ({ article }) => {
  const { title, body, votes, author, created_at, comment_count } = article
  return (
    <article>
      <title>{title}</title>
      <p>{body}</p>
      <p>Votes: {votes}</p>
      <p>Author: {author}</p>
      <p>Date: {created_at}</p>
      <p>comment count: {comment_count}</p>
    </article>
  );
};

export default ArticleLayout;