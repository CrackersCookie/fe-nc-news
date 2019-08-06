import React from 'react';

const ArticleLayout = ({ article }) => {
  const { title, body, votes, author, created_at, comment_count } = article
  const date = new Date(created_at).toLocaleDateString()

  // if (author === username) {
  //   deleteButton = <DeleteButton id={comment_id} removeFunction={removeFunction} />
  // }

  return (
    <>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>Votes: {votes}</p>
      <p>Author: {author}</p>
      <p>Date: {date}</p>
      <p>comment count: {comment_count}</p>
    </>
  );
};

export default ArticleLayout;