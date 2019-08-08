import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../../api";
import styles from "./ArticlesListPage.module.css";
import ArticleSorter from "./ArticleSorter";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LoadingSpinner from "../LoadingSpinner";
import ErrorDisplay from "../ErrorDisplay";
import Pagination from "../Pagination";

class ArticlesListPage extends Component {
  state = {
    articles: null,
    isLoading: true,
    error: null,
    p: 1,
    pMax: null
  };

  render() {
    const { articles, isLoading, error, p, pMax } = this.state;
    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorDisplay status={error.status} msg={error.msg} />;
    return (
      <section className={styles.articlesList}>
        <ArticleSorter fetchArticles={this.fetchArticles} />
        <ul className={styles.unorderedList}>
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
        <Pagination
          handlePageChange={this.handlePageChange}
          p={p}
          pMax={pMax}
        />
      </section>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { p } = this.state;
    if (prevProps.topic !== topic || prevState.p !== p) {
      this.fetchArticles();
    }
  }

  handlePageChange = pChange => {
    this.setState(({ p }) => ({ p: p + pChange }));
  };

  fetchArticles = query => {
    const { path, topic } = this.props;
    const { p } = this.state;
    if (!path) query = { sort_by: "created_at", order: "desc", limit: 3 };

    const queries = { topic, p, ...query };
    api
      .getArticles(queries)
      .then(({ articles, total_count }) => {
        const pMax = Math.ceil(total_count / 10);
        this.setState({ articles, isLoading: false, pMax });
      })
      .catch(({ response }) => {
        const error = { status: response.status, msg: response.data.msg };
        this.setState({ error, isLoading: false });
      });
  };
}

export default ArticlesListPage;
