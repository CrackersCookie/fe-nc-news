import React from 'react';
import styles from './Header.module.css';
import UserDropdownList from './UserDropdownList';

const Header = ({ username, setSelectedUser }) => {
  return (
    < header className={styles.header} >
      <h1>MC-NEWS</h1>
      <div>
        <h4>Logged in as: {username}</h4>
        <UserDropdownList username={username} setSelectedUser={setSelectedUser} />
      </div>
    </header >
  );
};

export default Header;
