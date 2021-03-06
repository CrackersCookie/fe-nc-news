import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "./Nav.module.css";
import NavTopicsButtons from "./NavTopicsButtons";
import * as api from "../../api";
import ErrorDisplay from "../ErrorDisplay";
import { Icon } from "@iconify/react";
import homeOutline from "@iconify/icons-mdi/home-outline";

class Nav extends Component {
  state = {
    topics: null,
    isLoading: true,
    error: null
  };

  render() {
    const { topics, isLoading, error } = this.state;
    if (error) return <ErrorDisplay status={error.status} msg={error.msg} />;

    return (
      <nav className={styles.nav}>
        <Link to="/">
          <Icon icon={homeOutline} />
        </Link>
        <Link to="/articles">all articles</Link>
        {isLoading ? (
          <p>topics loading....</p>
        ) : (
          <NavTopicsButtons topics={topics} />
        )}
      </nav>
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    const URL = "topics";
    api
      .getData(URL)
      .then(({ topics }) => {
        this.setState({ topics, isLoading: false });
      })
      .catch(({ response }) => {
        const error = { status: response.status, msg: response.data.msg };
        this.setState({ error, isLoading: false });
      });
  };
}

export default Nav;
