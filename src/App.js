import React, { Component } from 'react';
import './App.css';
import { Router } from "@reach/router";
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ArticlesListPage from './components/ArticlesListPage/ArticlesListPage';
import ArticlePage from './components/ArticlePage/ArticlePage';
import ErrorDisplay from './components/ErrorDisplay';

class App extends Component {
  state = {
    username: "jessjelly",
    avatar_url: "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg"
  }

  render() {
    const { username } = this.state
    return (
      <div className="App">
        <Header username={username} setSelectedUser={this.setSelectedUser} />
        <Nav />

        <Router>
          <HomePage path="/" />
          <ArticlesListPage path="/articles" />
          <ArticlesListPage path="/topics/:topic" />
          <ArticlePage path="/articles/:article_id" username={username} />
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
