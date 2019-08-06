import React from 'react';
import styles from "./CommentCard.module.css";
import DeleteButton from './DeleteButton';


const CommentCard = ({ comment, username, removeFunction }) => {
  const { body, votes, author, created_at, comment_id } = comment
  const date = new Date(created_at).toLocaleDateString()
  let deleteButton = null;

  if (author === username) {
    deleteButton = <DeleteButton id={comment_id} removeFunction={removeFunction} />
  }

  return (
    <li key={comment_id} className={styles.comment}>
      <p>{body}</p>
      <p>Author: {author}</p>
      <p>Date: {date}</p>
      <p>Votes: {votes}</p>
      {deleteButton}
    </li>
  );
};

export default CommentCard;