import React from 'react';
import styles from "./CommentCard.module.css";
import { Icon } from '@iconify/react';
import trashAlt from '@iconify/icons-fa-regular/trash-alt';

const CommentCard = ({ comment, username }) => {
  const { body, votes, author, created_at, comment_id } = comment
  const date = new Date(created_at).toLocaleDateString()
  let deleteButton = null;

  if (author === username) {
    deleteButton = <button value={comment_id} onClick={() => { this.removeComment(comment_id) }} ><span><Icon icon={trashAlt} /></span></button>
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


// const { body, votes, author, created_at, comment_id } = comment
            // const date = new Date(created_at).toLocaleDateString()
            // let deleteButton = null;

            // if (author === this.props.username) {
            //   deleteButton = <button value={comment_id} onClick={() => { this.removeComment(comment_id) }} ><span><Icon icon={trashAlt} /></span></button>
            // }

            // return (
            //   <li key={comment_id} className={styles.comment}>
            //     <p>{body}</p>
            //     <p>Author: {author}</p>
            //     <p>Date: {date}</p>
            //     <p>Votes: {votes}</p>
            //     {deleteButton}
            //   </li>
            // )