import React, { Component } from "react";
import styles from "./CreateArticleForm.module.css";
import * as api from "../../api";
import { navigate } from "@reach/router";
import ErrorDisplay from "../ErrorDisplay";

class CreateArticleForm extends Component {
  state = {
    title: "",
    body: "",
    topic: "",
    error: null,
    bodyCharacterLimit: 5000,
    error: null
  };

  render() {
    const { title, body, bodyCharacterLimit, topic, error } = this.state;
    if (error) return <ErrorDisplay status={error.status} msg={error.msg} />;

    return (
      <article className={styles.article}>
        <form onSubmit={this.handleSubmit} className={styles.postForm}>
          <input
            value={title}
            onChange={this.handleTextChange}
            type="text"
            name="title"
            placeholder="Title..."
            required
          />
          <select
            value={topic}
            onChange={this.handleOptionChange}
            className={styles.select}
          >
            <option value="" />
            <option value="coding">coding</option>
            <option value="football">football</option>
            <option value="cooking">cooking</option>
          </select>
          <textarea
            value={body}
            onChange={this.handleTextChange}
            rows="20"
            cols="20"
            name="body"
            placeholder="Write your article here..."
            required
          />
          <p className={styles.characters}>
            characters remaing: {bodyCharacterLimit - body.length}
          </p>
          <input type="submit" value="Submit" />
        </form>
      </article>
    );
  }

  handleTextChange = ({ target: { name, value } }) => {
    const { bodyCharacterLimit } = this.state;
    const characterLimitCheck =
      name === "body" && value.length <= bodyCharacterLimit;
    if (name === "title" || characterLimitCheck) {
      this.setState({ [name]: value });
    }
  };

  handleOptionChange = ({ target: { value } }) => {
    if (value) this.setState({ topic: value });
  };

  handleSubmit = e => {
    const { title, body, topic } = this.state;
    const author = this.props.username;
    e.preventDefault();
    api
      .postArticle({ author, title, body, topic })
      .then(({ article_id }) => {
        navigate(`/articles/${article_id}`);
      })
      .catch(({ response }) => {
        const error = { status: response.status, msg: response.data.msg };
        this.setState({ error, isLoading: false });
      });
  };
}

export default CreateArticleForm;
