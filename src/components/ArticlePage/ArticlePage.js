import React, { Component } from 'react';
import * as api from "../../api"
import ArticleLayout from './ArticleLayout';
import styles from './ArticlePage.module.css';
import LoadingSpinner from '../LoadingSpinner';
import CommentCard from './CommentCard';
import AddComment from './AddComment';

class ArticlePage extends Component {
  state = {
    article: null,
    isLoadingArticle: true,
    comments: null,
    isLoadingComments: true
  }
  render() {
    const { article, isLoadingArticle, comments, isLoadingComments } = this.state
    return (
      <>
        <article className={styles.article}>
          {isLoadingArticle ? <LoadingSpinner /> : <ArticleLayout article={article} />
          }
        </article>
        <section>
          <AddComment user={this.props.user} />
        </section>
        <section className={styles.comments}>
          {isLoadingComments ? <LoadingSpinner /> : <CommentCard comments={comments} />}
        </section>
      </>
    );
  }

  componentDidMount() {
    this.fetchArticle();
    this.fetchComments();
  }

  fetchArticle = () => {
    api.getArticle(this.props.article_id).then(article => {
      this.setState({ article, isLoadingArticle: false })
    })
  }

  fetchComments = () => {
    api.getComments(this.props.article_id).then(comments => {
      this.setState({ comments, isLoadingComments: false })
    })
  }
}


export default ArticlePage;