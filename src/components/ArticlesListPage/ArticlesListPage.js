import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import * as api from "../../api";
import styles from './ArticlesListPage.module.css';
import ArticleSorter from './ArticleSorter';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import LoadingSpinner from '../LoadingSpinner';
import ErrorDisplay from '../ErrorDisplay';
import { Link } from "@reach/router";


class ArticlesListPage extends Component {
  state = {
    articles: null,
    isLoading: true,
    error: null
  }

  render() {
    const { articles, isLoading, error } = this.state
    if (isLoading) return <LoadingSpinner />
    if (error) return <ErrorDisplay status={error.status} msg={error.msg} />
    return (
      <section className={styles.articlesList}>
        <h1>Articles</h1>
        {this.props.location && this.props.location.state.article_id && <p className={styles.deleted}>Article succesfully deleted</p>}
        <button className={styles.buttonPost}><Link to="/article" >Post Article</Link></button>
        {this.props.path ? <ArticleSorter fetchArticles={this.fetchArticles} /> : <></>}
        <ul>
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />
          })}
        </ul>
      </section>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }

  fetchArticles = (query) => {
    if (!this.props.path) query = { sort_by: "votes", order: "desc", limit: 3 }

    const queries = { topic: this.props.topic, ...query }
    api.getArticles(queries).then((articles) => {
      this.setState({ articles, isLoading: false })
    }).catch(({ response }) => {
      const error = { status: response.status, msg: response.data.msg }
      this.setState({ error, isLoading: false })
    })
  }

}

export default ArticlesListPage;