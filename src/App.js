import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import ArticlesListPage from "./components/ArticlesListPage/ArticlesListPage";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import ErrorDisplay from "./components/ErrorDisplay";
import CreateArticlePage from "./components/CreateArticlePage/CreateArticlePage";
import Footer from "./components/Footer";
import UserPage from "./components/UserPage/UserPage";
import AllUsersPage from "./components/AllUsersPage/AllUsersPage";
import * as api from "./api";
import LoadingSpinner from "./components/LoadingSpinner";

class App extends Component {
  state = {
    username: "jessjelly",
    users: null,
    isLoading: true
  };

  render() {
    const { username, users, isLoading } = this.state;
    if (isLoading) return <LoadingSpinner />;
    return (
      <div className="App">
        <Header
          username={username}
          setSelectedUser={this.setSelectedUser}
          users={users}
        />
        <Nav />

        <Router>
          <HomePage path="/" />
          <ArticlesListPage path="/articles" username={username} />
          <ArticlesListPage path="/topics/:topic" username={username} />
          <ArticlePage path="/articles/:article_id" username={username} />
          <CreateArticlePage path="/article" username={username} />
          <UserPage path="/users/:username" />
          <AllUsersPage path="/users" users={users} />
          <ErrorDisplay default status={404} msg={"Route not found"} />
        </Router>

        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    api.getUsers().then(users => this.setState({ users, isLoading: false }));
  };

  setSelectedUser = ({ target: { value } }) => {
    this.setState({ username: value });
  };
}

export default App;
