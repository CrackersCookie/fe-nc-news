import React, { Component } from 'react';
import SortByForm from './SortByForm';

class ArticleSorter extends Component {
  state = {
    sort_by: 'created_at'
  }

  render() {
    const { sort_by } = this.state
    return (
      <>
        <SortByForm sort_by={sort_by} HandleFormChange={this.HandleFormChange} />
        <button>Asc</button>
        <button>Desc</button>
      </>
    );
  }

  HandleFormChange = ({ target: { value } }) => {
    this.setState({ sort_by: value })
    this.props.fetchArticles({ sort_by: value })
  }
}

export default ArticleSorter;