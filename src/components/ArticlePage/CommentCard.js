import React from "react";
import styles from "./CommentCard.module.css";
import DeleteButton from "./DeleteButton";
import Voter from "../Voter";
import { Icon } from "@iconify/react";
import userIcon from "@iconify/icons-fa-regular/user";
import tearOffCalendar from "@iconify/icons-noto/tear-off-calendar";
import { Link } from "@reach/router";

const CommentCard = ({ comment, username, removeFunction }) => {
  const { body, votes, author, created_at, comment_id } = comment;
  const date = new Date(created_at).toLocaleDateString();

  return (
    <li key={comment_id} className={styles.comment}>
      <div className={styles.container}>
        <div className={styles.votes}>
          <Voter
            votes={votes}
            comment_id={comment_id}
            author={author}
            username={username}
          />
        </div>
        <div className={styles.commentBody}>
          <p>{body}</p>
          <div className={styles.flexContainer}>
            <p className={styles.pTag}>
              <Icon icon={userIcon} />{" "}
              <Link to={`/users/${author}`}>{author}</Link>
            </p>
            <p className={styles.pTag}>
              <Icon icon={tearOffCalendar} /> {date}
            </p>
          </div>
          {author === username && (
            <DeleteButton id={comment_id} removeFunction={removeFunction} />
          )}
        </div>
      </div>
    </li>
  );
};

export default CommentCard;
