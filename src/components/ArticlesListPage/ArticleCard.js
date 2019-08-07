import React from "react";
import styles from "./ArticleCard.module.css";
import { Link } from "@reach/router";
import Voter from "../Voter";
import { Icon } from "@iconify/react";
import userIcon from "@iconify/icons-fa-regular/user";
import commentAltMessage from "@iconify/icons-uil/comment-alt-message";
import tearOffCalendar from "@iconify/icons-noto/tear-off-calendar";

const ArticleCard = ({ article }) => {
  const {
    title,
    author,
    body,
    created_at,
    votes,
    comment_count,
    article_id
  } = article;
  const date = new Date(created_at).toLocaleDateString();

  return (
    <li className={styles.article}>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>
        <Icon icon={userIcon} /> {author}
      </p>
      <p>
        <Icon icon={tearOffCalendar} /> {date}
      </p>
      <Voter votes={votes} article_id={article_id} />
      <p>
        <Icon icon={commentAltMessage} flip="horizontal" /> {comment_count}
      </p>
      <Link to={`/articles/${article_id}`}>
        <button className={styles.button}>read article</button>
      </Link>
    </li>
  );
};

export default ArticleCard;
