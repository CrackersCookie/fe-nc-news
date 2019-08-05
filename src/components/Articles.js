import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import * as api from "./api";

class Articles extends Component {
  state = {
    articles: null,
    isLoading: true
  }

  render() {
    const { articles, isLoading } = this.state
    return (
      <section>
        <h1>Articles</h1>
        {isLoading ? <p>is loading.....</p> : <ArticleCard articles={articles} />}
      </section>
    );
  }


  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    api.getArticles().then(({ articles }) => {
      this.setState({ articles, isLoading: false })
    })
  }

}

export default Articles;