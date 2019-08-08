import React, { Component } from "react";
import LoadingSpinner from "../LoadingSpinner";
import * as api from "../../api";
import ArticlesList from "../ArticlesListPage/ArticlesList";

class UserPage extends Component {
  state = {
    user: null,
    isLoading: true
  };

  render() {
    const { user, isLoading } = this.state;
    if (isLoading) return <LoadingSpinner />;
    const { username, name, avatar_url } = user;
    return (
      <div>
        <p>{username}</p>
        <p>{name}</p>
        <img src={avatar_url} alt="profile" />
        <ArticlesList username={username} />
      </div>
    );
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    const { username } = this.props;
    api.getUser(username).then(user => {
      this.setState({ user, isLoading: false });
    });
  };
}

export default UserPage;
