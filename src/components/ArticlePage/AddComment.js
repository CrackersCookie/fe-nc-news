import React, { Component } from 'react';
import * as api from "../../api"

class AddComment extends Component {
  state = {
    comment: ''
  }
  render() {
    return (
      <>
        <h3>Add comment</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea onChange={this.handleTextChange} rows="4" cols="80" name="comment" required></textarea>
          <p>logged in as: {`${this.props.user}`}</p>
          <input type="submit" value="post comment" />
        </form>
      </>
    );
  }

  handleTextChange = ({ target: { value } }) => {
    this.setState({ comment: value })
  }

  handleSubmit = (e) => {
    const user = this.props
    const { comment } = this.state
    e.preventDefault()
    api.postComment({ user, body: comment }).then(({ comment }) => {
      console.log(comment)
    })
  }


}

export default AddComment;