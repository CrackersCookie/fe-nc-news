import React, { Component } from 'react';
import './App.css';
import { Router } from "@reach/router";
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ArticlesListPage from './components/ArticlesListPage/ArticlesListPage';

class App extends Component {
  state = {
    user: "jessjelly"
  }

  render() {
    const { user } = this.state
    return (
      <div className="App">
        <Header user={user} />
        <Nav />

        <Router>
          <HomePage path="/" />
          <ArticlesListPage path="/articles" />
        </Router>
      </div>
    );
  }
}

export default App;
