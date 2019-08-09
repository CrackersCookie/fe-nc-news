import React, { Component } from "react";
import LoadingSpinner from "../LoadingSpinner";
import * as api from "../../api";
import ArticlesList from "../ArticlesListPage/ArticlesList";
import styles from "./UserPage.module.css";

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
      <section>
        <div className={styles.section}>
          <div className={styles.user}>
            <h3>name: {name}</h3>
            <p>username: {username}</p>
            <img src={avatar_url} alt="profile" className={styles.shake} />
          </div>
        </div>
        <ArticlesList username={username} />
      </section>
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
