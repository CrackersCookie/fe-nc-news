import React, { Component } from 'react';
import './App.css';
import { Router } from "@reach/router";
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';

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
          <Articles path="/" />
          <Articles path="/articles" />
        </Router>
      </div>
    );
  }
}

export default App;
