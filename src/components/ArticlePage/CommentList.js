import React, { Component } from 'react';
import styles from "./CommentList.module.css";
import * as api from "../../api";
import LoadingSpinner from '../LoadingSpinner';
import AddComment from './AddComment';
import CommentCard from './CommentCard';


class CommentList extends Component {
  state = {
    comments: null,
    isLoading: true
  }

  render() {
    const { comments, isLoading } = this.state
    if (isLoading) return <LoadingSpinner />
    return (
      <section className={styles.comments}>
        <AddComment username={this.props.username} article_id={this.props.article_id} addComment={this.addComment} />
        < ul >
          {comments.map(comment => {
            return <CommentCard comment={comment} username={this.props.username} removeFunction={this.removeFunction} />
          })}
        </ul >
      </section>
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

  removeFunction = (comment_id) => {
    api.deleteComment(comment_id).then(() => {
      this.fetchComments();
    })
  }

};

export default CommentList;



