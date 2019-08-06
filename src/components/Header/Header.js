import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    < header className={styles.header} >
      <h1>MC-NEWS</h1>
      <h3>{props.username}</h3>
    </header >
  );
};

export default Header;