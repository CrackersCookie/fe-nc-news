import React, { Component } from 'react';
import * as api from "../../api"
import ArticleLayout from './ArticleLayout';

class ArticlePage extends Component {
  state = {
    article: null,
    isLoading: true
  }
  render() {
    const { article, isLoading } = this.state
    return (
      <>
        {isLoading ? <p>is loading.....</p> : <ArticleLayout article={article} />
        }
      </>
    );
  }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = () => {
    api.getArticle(this.props.article_id).then(article => {
      this.setState({ article, isLoading: false })
    })
  }
}

export default ArticlePage;