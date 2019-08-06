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
    isLoading: true,
  }
  render() {
    const { article, isLoading } = this.state
    if (isLoading) return <LoadingSpinner />
    return (
      <>
        <article className={styles.article}>
          <ArticleLayout article={article} />
        </article>
        <section>
          <AddComment user={this.props.user} />
        </section>
        <section className={styles.comments}>
          < CommentCard article_id={this.state.article.article_id} />
        </section>
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