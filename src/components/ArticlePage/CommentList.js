import React, { Component } from 'react';
import styles from "./CommentList.module.css";
import * as api from "../../api";
import LoadingSpinner from '../LoadingSpinner';
import AddComment from './AddComment';
import CommentCard from './CommentCard';
import ErrorDisplay from '../ErrorDisplay';


class CommentList extends Component {
  state = {
    comments: null,
    isLoading: true,
    error: null
  }

  render() {
    const { comments, isLoading, error } = this.state
    if (isLoading) return <LoadingSpinner />
    if (error) return <ErrorDisplay status={error.status} msg={error.msg} />
    return (
      <section className={styles.comments}>
        {this.props.username ? <AddComment username={this.props.username} article_id={this.props.article_id} addComment={this.addComment} /> : <h3>please log in to leave a comment</h3>}
        {!comments.length ? <h3>no comments</h3> :
          <>
            <h3>Comments</h3>
            < ul >
              {comments.map(comment => {
                return <CommentCard key={comment.comment_id} comment={comment} username={this.props.username} removeFunction={this.removeFunction} />
              })}
            </ul >
          </>}
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
    }).catch(({ response }) => {
      const error = { status: response.status, msg: response.data.msg }
      this.setState({ error, isLoading: false })
    })
  }

};

export default CommentList;



