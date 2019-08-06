import React, { Component } from 'react';
import styles from "./CommentCard.module.css";
import * as api from "../../api";
import LoadingSpinner from '../LoadingSpinner';

class CommentCard extends Component {
  state = {
    comments: null,
    isLoading: true
  }

  render() {
    const { comments, isLoading } = this.state
    return (
      <>
        {isLoading ? <LoadingSpinner /> :
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
          </ul >}
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

};

export default CommentCard;