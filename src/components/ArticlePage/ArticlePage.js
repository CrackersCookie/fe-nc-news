import React, { Component } from 'react';
import * as api from "../../api"
import ArticleLayout from './ArticleLayout';
import styles from './ArticlePage.module.css';
import LoadingSpinner from '../LoadingSpinner';
import CommentList from './CommentList';
import ErrorDisplay from '../ErrorDisplay';
import { navigate } from "@reach/router";

class ArticlePage extends Component {
  state = {
    article: null,
    isLoading: true,
    error: null
  }

  render() {
    const { article, isLoading, error } = this.state
    if (isLoading) return <LoadingSpinner />
    if (error) return <ErrorDisplay status={error.status} msg={error.msg} />
    return (
      <>
        <article className={styles.article}>
          <ArticleLayout article={article} username={this.props.username} removeFunction={this.removeFunction} />
        </article>
        < CommentList article_id={this.state.article.article_id} username={this.props.username} />
      </>
    );
  }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = () => {
    api.getArticle(this.props.article_id).then(article => {
      this.setState({ article, isLoading: false })
    }).catch(({ response }) => {
      const error = { status: response.status, msg: response.data.msg }
      this.setState({ error, isLoading: false })
    })
  }

  removeFunction = (article_id, topic) => {
    api.deleteArticle(article_id).then(() => {
      navigate(`/topics/${topic}`, { state: { article_id } })
    }).catch(({ response }) => {
      const error = { status: response.status, msg: response.data.msg }
      this.setState({ error, isLoading: false })
    })
  }

}


export default ArticlePage;