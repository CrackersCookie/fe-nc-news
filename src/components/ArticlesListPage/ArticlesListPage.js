import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../../api";
import styles from "./ArticlesListPage.module.css";
import ArticleSorter from "./ArticleSorter";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LoadingSpinner from "../LoadingSpinner";
import ErrorDisplay from "../ErrorDisplay";
import { Link } from "@reach/router";

class ArticlesListPage extends Component {
  state = {
    articles: null,
    isLoading: true,
    error: null
  };

  render() {
    console.log(this.props);
    const { articles, isLoading, error } = this.state;
    const { path, location, username, topic } = this.props;
    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorDisplay status={error.status} msg={error.msg} />;
    return (
      <section className={styles.articlesList}>
        {topic ? (
          <h1>{topic}</h1>
        ) : path ? (
          <h1>all articles</h1>
        ) : (
          <h1>most recent articles</h1>
        )}
        {location && location.state.article_id && (
          <p className={styles.deleted}>Article succesfully deleted</p>
        )}
        {path && (
          <>
            {username && (
              <div className={styles.buttonContainer}>
                <button className={styles.buttonPost}>
                  <Link to="/article">Post Article</Link>
                </button>
              </div>
            )}
            <ArticleSorter fetchArticles={this.fetchArticles} />
          </>
        )}
        <ul className={styles.unorderedList}>
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </section>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    const { topic } = this.props;
    if (prevProps.topic !== topic) {
      this.fetchArticles();
    }
  }

  fetchArticles = query => {
    const { path, topic } = this.props;
    if (!path) query = { sort_by: "created_at", order: "desc", limit: 3 };

    const queries = { topic, ...query };
    api
      .getArticles(queries)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(({ response }) => {
        const error = { status: response.status, msg: response.data.msg };
        this.setState({ error, isLoading: false });
      });
  };
}

export default ArticlesListPage;
