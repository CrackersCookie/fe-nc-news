import React, { Component } from 'react';
import { Link } from "@reach/router";
import styles from './Nav.module.css';
import NavTopicsButtons from './NavTopicsButtons';
import * as api from "../../api";

class Nav extends Component {
  state = {
    topics: null,
    isLoading: true
  }

  render() {
    const { topics, isLoading } = this.state
    return (
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        {isLoading ? <p>page loading....</p> :
          <NavTopicsButtons topics={topics} />}
      </nav>
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics().then(topics => {
      this.setState({ topics, isLoading: false })
    })
  }
}

export default Nav;
