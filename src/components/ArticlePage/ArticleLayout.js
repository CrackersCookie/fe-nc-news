import React from 'react';

const ArticleLayout = ({ article }) => {
  const { title, body, votes, author, created_at, comment_count } = article
  return (
    <>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>Votes: {votes}</p>
      <p>Author: {author}</p>
      <p>Date: {created_at}</p>
      <p>comment count: {comment_count}</p>
    </>
  );
};

export default ArticleLayout;