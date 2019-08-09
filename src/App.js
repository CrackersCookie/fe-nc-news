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
import CreateUserPage from "./components/CreateUserPage/CreateUserPage";

class App extends Component {
  state = {
    loggedInUser: "jessjelly",
    users: null,
    isLoading: true
  };

  render() {
    const { loggedInUser, users, isLoading } = this.state;
    if (isLoading) return <LoadingSpinner />;
    return (
      <div className="App">
        <Header
          loggedInUser={loggedInUser}
          setSelectedUser={this.setSelectedUser}
          users={users}
        />
        <Nav />

        <Router>
          <HomePage path="/" />
          <ArticlesListPage path="/articles" loggedInUser={loggedInUser} />
          <ArticlesListPage path="/topics/:topic" loggedInUser={loggedInUser} />
          <ArticlePage
            path="/articles/:article_id"
            loggedInUser={loggedInUser}
          />
          <CreateArticlePage path="/article" loggedInUser={loggedInUser} />
          <UserPage path="/users/:username" loggedInUser={loggedInUser} />
          <AllUsersPage path="/users" users={users} />
          <CreateUserPage path="/user" />
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
    this.setState({ loggedInUser: value });
  };
}

export default App;
