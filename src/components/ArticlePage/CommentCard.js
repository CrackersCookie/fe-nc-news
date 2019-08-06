import React, { Component } from 'react';
import styles from "./CommentCard.module.css";
import * as api from "../../api";
import LoadingSpinner from '../LoadingSpinner';
import AddComment from './AddComment';

class CommentCard extends Component {
  state = {
    comments: null,
    isLoading: true
  }

  render() {
    const { comments, isLoading } = this.state
    if (isLoading) return <LoadingSpinner />
    return (
      <>
        <AddComment username={this.props.username} article_id={this.props.article_id} addComment={this.addComment} />
        < ul >
          {
            comments.map(comment => {
              const { body, votes, author, created_at, comment_id } = comment
              const date = new Date(created_at).toLocaleDateString()
              return (
                <li key={comment_id} className={styles.comment}>
                  <p>{body}</p>
                  <p>Author: {author}</p>
                  <p>Date: {date}</p>
                  <p>Votes: {votes}</p>
                </li>
              )
            })
          }
        </ul >
      </>
    );
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    api.getComments(this.props.article_id).then(comments => {
      this.setState({ comments, isLoading: false })
    })
  }

  addComment = (comment) => {
    this.setState((currentState) => {
      const comments = [comment, ...currentState.comments]
      return { comments }
    })
  }

};

export default CommentCard;