import React from "react";
import DeleteButton from "./DeleteButton";
import { Icon } from "@iconify/react";
import userIcon from "@iconify/icons-fa-regular/user";
import commentAltMessage from "@iconify/icons-uil/comment-alt-message";

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
    <>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>Votes: {votes}</p>
      <p>
        <Icon icon={userIcon} /> {author}
      </p>
      <p>Date: {date}</p>
      <p>
        <Icon icon={commentAltMessage} flip="horizontal" /> {comment_count}
      </p>
      {author === username ? (
        <DeleteButton
          id={article_id}
          topic={topic}
          removeFunction={removeFunction}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default ArticleLayout;
