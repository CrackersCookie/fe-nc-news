import React from "react";
import styles from "./Header.module.css";
import UserDropdownList from "./UserDropdownList";

const Header = ({ username, setSelectedUser }) => {
  return (
    <header className={styles.header}>
      <h1>MC-NEWS</h1>
      <div>
        {username && (
          <>
            <button value={null} onClick={e => setSelectedUser(e)}>
              log out
            </button>
            <h4>Logged in as: {username}</h4>{" "}
          </>
        )}
        <UserDropdownList
          username={username}
          setSelectedUser={setSelectedUser}
        />
      </div>
    </header>
  );
};

export default Header;
