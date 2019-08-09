import React, { Component } from "react";
import * as api from "../../api";
import styles from "./AddComment.module.css";
import ErrorDisplay from "../ErrorDisplay";

class AddComment extends Component {
  state = {
    comment: "",
    characterLimit: 1000,
    error: null
  };
  render() {
    const { comment, characterLimit, error } = this.state;
    if (error) return <ErrorDisplay status={error.status} msg={error.msg} />;
    return (
      <>
        <h3>Add comment</h3>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <textarea
            value={comment}
            onChange={this.handleTextChange}
            rows="6"
            cols="80"
            name="comment"
            placeholder="Enter your comment here..."
            className={styles.textArea}
            required
          />
          <div className={styles.formButtons}>
            <p className={styles.characters}>
              characters remaining: {characterLimit - comment.length}
            </p>
            <input
              className={styles.button}
              type="submit"
              value="post comment"
            />
          </div>
        </form>
      </>
    );
  }

  handleTextChange = ({ target: { value } }) => {
    const { characterLimit } = this.state;
    if (value.length <= characterLimit) {
      this.setState({ comment: value });
    }
  };

  handleSubmit = e => {
    const { comment } = this.state;
    const { loggedInUser, article_id } = this.props;
    const username = loggedInUser;
    e.preventDefault();
    api
      .postComment({ username, body: comment, article_id })
      .then(comment => {
        this.props.addComment(comment);
        this.setState({ comment: "" });
      })
      .catch(({ response }) => {
        const error = { status: response.status, msg: response.data.msg };
        this.setState({ error, isLoading: false });
      });
  };
}

export default AddComment;
