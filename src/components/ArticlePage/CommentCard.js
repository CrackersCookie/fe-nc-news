import React from 'react';
import styles from "./CommentCard.module.css"

const CommentCard = ({ comments }) => {
  return (
    < ul >
      {
        comments.map(comment => {
          const { body, votes, author, created_at, comment_id } = comment
          const date = new Date(created_at).toLocaleDateString()
          return (
            <li key={comment_id} className={styles.comment}>
              <p>{body}</p>
              <p>Author: {author}</p>
              <p>Date: {date}</p>
              <p>Votes: {votes}</p>
            </li>
          )
        })
      }
    </ul >
  );
};

export default CommentCard;