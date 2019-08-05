import React, { Component } from 'react';
import { Link } from "@reach/router";
import styles from './Nav.module.css';
import NavTopicsButtons from './NavTopicsButtons';

class Nav extends Component {
  state = {
    topics: null
  }

  render() {
    return (
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <NavTopicsButtons />
      </nav>
    );
  }
}

export default Nav;
