import React from "react";
import styles from "./CommentCard.module.css";
import DeleteButton from "./DeleteButton";
import Voter from "../Voter";
import { Icon } from "@iconify/react";
import userIcon from "@iconify/icons-fa-regular/user";
import tearOffCalendar from "@iconify/icons-noto/tear-off-calendar";

const CommentCard = ({ comment, username, removeFunction }) => {
  const { body, votes, author, created_at, comment_id } = comment;
  const date = new Date(created_at).toLocaleDateString();

  return (
    <li key={comment_id} className={styles.comment}>
      <p>{body}</p>
      <p>
        <Icon icon={userIcon} /> {author}
      </p>
      <p>
        <Icon icon={tearOffCalendar} /> {date}
      </p>
      <Voter votes={votes} comment_id={comment_id} />
      {author === username && (
        <DeleteButton id={comment_id} removeFunction={removeFunction} />
      )}
    </li>
  );
};

export default CommentCard;
