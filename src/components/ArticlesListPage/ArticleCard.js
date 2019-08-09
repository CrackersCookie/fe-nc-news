import React from "react";
import styles from "./ArticleCard.module.css";
import { Link } from "@reach/router";
import Voter from "../Voter";
import { Icon } from "@iconify/react";
import userIcon from "@iconify/icons-fa-regular/user";
import commentAltMessage from "@iconify/icons-uil/comment-alt-message";
import tearOffCalendar from "@iconify/icons-noto/tear-off-calendar";

const ArticleCard = ({ article, loggedInUser }) => {
  const {
    title,
    author,
    created_at,
    votes,
    comment_count,
    article_id
  } = article;
  const date = new Date(created_at).toLocaleDateString();

  return (
    <li className={styles.article}>
      <div className={styles.container}>
        <div className={styles.votes}>
          <Voter
            votes={votes}
            article_id={article_id}
            loggedInUser={loggedInUser}
            author={author}
          />
        </div>
        <div className={styles.articleBody}>
          <h3>{title}</h3>
          <p>
            <Icon icon={userIcon} />
            <Link to={`/users/${author}`}>{author}</Link>
          </p>
          <p>
            <Icon icon={commentAltMessage} flip="horizontal" /> {comment_count}
          </p>
          <div className={styles.flexContainer}>
            <p className={styles.calendar}>
              <Icon icon={tearOffCalendar} /> {date}
            </p>
            <Link to={`/articles/${article_id}`}>
              <button className={styles.button}>read article</button>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ArticleCard;
