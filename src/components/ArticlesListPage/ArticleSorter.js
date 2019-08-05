import React, { Component } from 'react';
import SortByForm from './SortByForm';
import AscDescButtons from './AscDescButtons';
import styles from "./ArticleSorter.module.css"

class ArticleSorter extends Component {
  state = {
    sort_by: 'created_at',
    order: 'desc'
  }

  render() {
    const { sort_by } = this.state
    return (
      <div className={styles.sort}>
        <SortByForm sort_by={sort_by} HandleFormChange={this.HandleFormChange} />
        <AscDescButtons HandleFormChange={this.HandleFormChange} />
      </div>
    );
  }

  HandleFormChange = ({ target: { value, name } }) => {
    this.setState(currentState => {
      if (value) currentState.sort_by = value;
      else currentState.order = name;
      this.props.fetchArticles(currentState);
      return currentState;
    })
  }
}

export default ArticleSorter;