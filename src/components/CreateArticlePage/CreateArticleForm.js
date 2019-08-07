import React, { Component } from 'react';
import styles from './CreateArticleForm.module.css';

class CreateArticleForm extends Component {
  render() {
    return (
      <article className={styles.article}>
        <form className={styles.postForm}>
          <input type="text" name="title" placeholder="Title..." />
          <textarea rows="20" cols="20" name="comment" placeholder="Write your article here..." required></textarea>
          <input type="submit" value="Submit"></input>
        </form>
      </article>
    );
  }
}

export default CreateArticleForm;