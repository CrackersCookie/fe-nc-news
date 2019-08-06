import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import * as api from "../../api";
import styles from './ArticlesListPage.module.css';
import ArticleSorter from './ArticleSorter';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import LoadingSpinner from '../LoadingSpinner';


class Articles extends Component {
  state = {
    articles: null,
    isLoading: true
  }

  render() {
    const { articles, isLoading } = this.state
    if (isLoading) return <LoadingSpinner />
    return (
      <section className={styles.articlesList}>
        <h1>Articles</h1>
        <ArticleSorter fetchArticles={this.fetchArticles} />
        <ul>
          {articles.map(article => {
            return <ArticleCard article={article} />
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
    const queries = { topic: this.props.topic, ...query }
    api.getArticles(queries).then((articles) => {
      this.setState({ articles, isLoading: false })
    })
  }

}

export default Articles;