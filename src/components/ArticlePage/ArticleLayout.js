import React from "react";
import DeleteButton from "./DeleteButton";
import { Icon } from "@iconify/react";
import userIcon from "@iconify/icons-fa-regular/user";
import commentAltMessage from "@iconify/icons-uil/comment-alt-message";
import tearOffCalendar from "@iconify/icons-noto/tear-off-calendar";
import { Link } from "@reach/router";
import styles from "./ArticleLayout.module.css";
import Voter from "../Voter";

const ArticleLayout = ({ article, username, removeFunction }) => {
  const {
    title,
    body,
    votes,
    author,
    created_at,
    comment_count,
    article_id,
    topic
  } = article;
  const date = new Date(created_at).toLocaleDateString();

  return (
    <div className={styles.container}>
      <div className={styles.votes}>
        <Voter
          votes={votes}
          article_id={article_id}
          author={author}
          username={username}
        />
      </div>
      <div className={styles.articleBody}>
        <h3>{title}</h3>
        <p>{body}</p>
        <div className={styles.flexContainer}>
          <p>
            <Icon icon={userIcon} />{" "}
            <Link to={`/users/${author}`}>{author}</Link>
          </p>
          <p>
            <Icon icon={tearOffCalendar} /> {date}
          </p>
          <p>
            <Icon icon={commentAltMessage} flip="horizontal" /> {comment_count}
          </p>
        </div>
        {author === username && (
          <DeleteButton
            id={article_id}
            topic={topic}
            removeFunction={removeFunction}
          />
        )}
      </div>
    </div>
  );
};

export default ArticleLayout;
