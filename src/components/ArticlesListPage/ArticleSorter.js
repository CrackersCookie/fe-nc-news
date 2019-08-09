import React, { Component } from "react";
import SortByForm from "./SortByForm";
import AscDescButtons from "./AscDescButtons";
import styles from "./ArticleSorter.module.css";
import ErrorDisplay from "../ErrorDisplay";

class ArticleSorter extends Component {
  state = {
    sort_by: "created_at",
    order: "desc",
    p: 1,
    error: null
  };

  render() {
    const { sort_by, error } = this.state;
    if (error) return <ErrorDisplay status={error.status} msg={error.msg} />;

    return (
      <div className={styles.sort}>
        <SortByForm
          sort_by={sort_by}
          HandleFormChange={this.HandleFormChange}
        />
        <AscDescButtons HandleFormChange={this.HandleFormChange} />
      </div>
    );
  }

  HandleFormChange = ({ target: { value, name } }) => {
    const { fetchArticles } = this.props;

    this.setState(currentState => {
      value ? (currentState.sort_by = value) : (currentState.order = name);
      fetchArticles(currentState);
      return currentState;
    }).catch(({ response }) => {
      const error = { status: response.status, msg: response.data.msg };
      this.setState({ error, isLoading: false });
    });
  };
}

export default ArticleSorter;
