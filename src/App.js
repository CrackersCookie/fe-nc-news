import React, { Component } from 'react';
import './App.css';
import { Router } from "@reach/router";
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ArticlesListPage from './components/ArticlesListPage/ArticlesListPage';
import ArticlePage from './components/ArticlePage/ArticlePage';

class App extends Component {
  state = {
    username: "jessjelly"
  }

  render() {
    const { username } = this.state
    return (
      <div className="App">
        <Header username={username} />
        <Nav />

        <Router>
          <HomePage path="/" />
          <ArticlesListPage path="/articles" />
          <ArticlesListPage path="/topics/:topic" />
          <ArticlePage path="/articles/:article_id" username={username} />
        </Router>
      </div>
    );
  }
}

export default App;
