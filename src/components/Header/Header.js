import React from "react";
import styles from "./Header.module.css";
import UserDropdownList from "./UserDropdownList";
import { Icon } from "@iconify/react";
import userIcon from "@iconify/icons-fa-regular/user";

const Header = ({ username, setSelectedUser }) => {
  return (
    <header className={styles.header}>
      <h1>MC-NEWS</h1>
      <div className={styles.userHeader}>
        {username && (
          <>
            <button
              className={styles.button}
              value={null}
              onClick={e => setSelectedUser(e)}
            >
              log out
            </button>
            <h4 className={styles.username}>
              <Icon icon={userIcon} /> {username}
            </h4>
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
