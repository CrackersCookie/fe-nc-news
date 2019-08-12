import React, { Component } from "react";
import * as api from "../../api";
import ArticleLayout from "./ArticleLayout";
import styles from "./ArticlePage.module.css";
import LoadingSpinner from "../LoadingSpinner";
import CommentList from "./CommentList";
import ErrorDisplay from "../ErrorDisplay";
import { navigate } from "@reach/router";

class ArticlePage extends Component {
  state = {
    article: null,
    isLoading: true,
    error: null
  };

  render() {
    const { article, isLoading, error } = this.state;
    const { loggedInUser } = this.props;
    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorDisplay status={error.status} msg={error.msg} />;

    return (
      <>
        <article className={styles.article}>
          <ArticleLayout
            article={article}
            loggedInUser={loggedInUser}
            removeFunction={this.removeFunction}
          />
        </article>
        <CommentList
          article_id={article.article_id}
          loggedInUser={loggedInUser}
        />
      </>
    );
  }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = () => {
    const { article_id } = this.props;
    api
      .getArticle(article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(({ response }) => {
        const error = { status: response.status, msg: response.data.msg };
        this.setState({ error, isLoading: false });
      });
  };

  removeFunction = (article_id, topic) => {
    const URL = `articles/${article_id}`;
    api
      .deleteData(URL)
      .then(() => {
        navigate(`/topics/${topic}`, { state: { article_id } });
      })
      .catch(({ response }) => {
        const error = { status: response.status, msg: response.data.msg };
        this.setState({ error, isLoading: false });
      });
  };
}

export default ArticlePage;
