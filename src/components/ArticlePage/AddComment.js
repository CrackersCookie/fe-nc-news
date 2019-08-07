import React, { Component } from 'react';
import * as api from "../../api"
import styles from './AddComment.module.css';

class AddComment extends Component {
  state = {
    comment: '',
    characterLimit: 1000
  }
  render() {
    return (
      <>
        <h3>Add comment</h3>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <textarea value={this.state.comment} onChange={this.handleTextChange} rows="4" cols="80" name="comment" placeholder="Enter your comment here..." className={styles.textArea} required></textarea>
          <p className={styles.characters}>characters remaing: {this.state.characterLimit - this.state.comment.length}</p>
          <input className={styles.button} type="submit" value="post comment" />
        </form>
      </>
    );
  }

  handleTextChange = ({ target: { value } }) => {
    if (value.length <= this.state.characterLimit) {
      this.setState({ comment: value })
    }
  }

  handleSubmit = (e) => {
    const { comment } = this.state
    const { username, article_id } = this.props
    e.preventDefault()
    api.postComment({ username, body: comment, article_id }).then((comment) => {
      this.props.addComment(comment)
      this.setState({ comment: '' })
    })
  }
}

export default AddComment;