import React, { Component } from 'react';
import { Link } from "@reach/router";
import styles from './Nav.module.css';

class Nav extends Component {
  state = {
    topics: null
  }

  render() {
    return (
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
      </nav>
    );
  }
}

export default Nav;
