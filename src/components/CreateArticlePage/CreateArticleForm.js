import React, { Component } from 'react';
import styles from './CreateArticleForm.module.css';
import * as api from "../../api"
import { navigate } from '@reach/router';

class CreateArticleForm extends Component {
  state = {
    title: '',
    body: '',
    topic: 'coding',
    error: null
  }

  render() {
    return (
      <article className={styles.article}>
        <form onSubmit={this.handleSubmit} className={styles.postForm}>
          <input value={this.state.title} onChange={this.handleTextChange} type="text" name="title" placeholder="Title..." required />
          <select value={"topic"} onChange={this.handleOptionChange} className={styles.select}>
            <option value="coding">coding</option>
            <option value="football">football</option>
            <option value="cooking">cooking</option>
          </select>
          <textarea value={this.state.body} onChange={this.handleTextChange} rows="20" cols="20" name="body" placeholder="Write your article here..." required></textarea>
          <input type="submit" value="Submit"></input>
        </form>
      </article>
    );
  }

  handleTextChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleOptionChange = ({ target: { name, value } }) => {
    this.setState({ topic: value })
  }

  handleSubmit = (e) => {
    const { title, body, topic } = this.state
    const author = this.props.username
    e.preventDefault()
    api.postArticle({ author, title, body, topic }).then(({ article_id }) => {
      navigate(`/articles/${article_id}`)
    }).catch(({ response }) => {
      const error = { status: response.status, msg: response.data.msg }
      this.setState({ error, isLoading: false })
    })

  }
}

export default CreateArticleForm;