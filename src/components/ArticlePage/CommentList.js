import React, { Component } from "react";
import styles from "./CommentList.module.css";
import * as api from "../../api";
import LoadingSpinner from "../LoadingSpinner";
import AddComment from "./AddComment";
import CommentCard from "./CommentCard";
import ErrorDisplay from "../ErrorDisplay";

class CommentList extends Component {
  state = {
    comments: null,
    isLoading: true,
    error: null,
    deleted: false
  };

  render() {
    const { comments, isLoading, error, deleted } = this.state;
    const { loggedInUser, article_id } = this.props;
    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorDisplay status={error.status} msg={error.msg} />;
    return (
      <section className={styles.comments}>
        {loggedInUser ? (
          <AddComment
            loggedInUser={loggedInUser}
            article_id={article_id}
            addComment={this.addComment}
          />
        ) : (
          <h3 className={styles.comments}>please log in to leave a comment</h3>
        )}
        {!comments.length ? (
          <h3>no comments available</h3>
        ) : (
          <>
            <h3>Comments</h3>
            {deleted && (
              <p className={styles.deleted}>comment succesfully deleted</p>
            )}
            <ul>
              {comments.map(comment => {
                return (
                  <CommentCard
                    key={comment.comment_id}
                    comment={comment}
                    loggedInUser={loggedInUser}
                    removeFunction={this.removeFunction}
                  />
                );
              })}
            </ul>
          </>
        )}
      </section>
    );
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    const { article_id } = this.props;
    const URL = `articles/${article_id}/comments`;
    api.getData(URL).then(({ comments }) => {
      this.setState({ comments, isLoading: false });
    });
  };

  addComment = comment => {
    this.setState(currentState => {
      const comments = [comment, ...currentState.comments];
      return { comments };
    });
  };

  removeFunction = comment_id => {
    const URL = `/comments/${comment_id}`;
    api
      .deleteData(URL)
      .then(() => {
        this.setState(({ comments }) => {
          const filteredComments = comments.filter(
            comment => comment.comment_id !== comment_id
          );
          return { comments: filteredComments, deleted: true };
        });
      })
      .catch(({ response }) => {
        const error = { status: response.status, msg: response.data.msg };
        this.setState({ error, isLoading: false });
      });
  };
}

export default CommentList;
