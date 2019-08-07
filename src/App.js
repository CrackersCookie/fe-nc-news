import React, { Component } from 'react';
import './App.css';
import { Router } from "@reach/router";
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ArticlesListPage from './components/ArticlesListPage/ArticlesListPage';
import ArticlePage from './components/ArticlePage/ArticlePage';
import ErrorDisplay from './components/ErrorDisplay';
import CreateArticlePage from './components/CreateArticlePage/CreateArticlePage';

class App extends Component {
  state = {
    username: "jessjelly"
  }

  render() {
    const { username } = this.state
    return (
      <div className="App">
        <Header username={username} setSelectedUser={this.setSelectedUser} />
        <Nav />

        <Router>
          <HomePage path="/" />
          <ArticlesListPage path="/articles" username={username} />
          <ArticlesListPage path="/topics/:topic" />
          <ArticlePage path="/articles/:article_id" username={username} />
          <CreateArticlePage path="/article" username={username} />
          <ErrorDisplay default status={404} msg={'Route not found'} />
        </Router>
      </div>
    );
  }

  setSelectedUser = ({ target: { value } }) => {
    this.setState({ username: value })
  }
}

export default App;
