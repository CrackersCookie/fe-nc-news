import React from "react";
import styles from "./Header.module.css";
import UserList from "./UserList";
import { Icon } from "@iconify/react";
import userIcon from "@iconify/icons-fa-regular/user";
import { Link } from "@reach/router";
import mcnews from "../../Images/mc-news.png";

const Header = ({ username, setSelectedUser, users }) => {
  return (
    <header className={styles.header}>
      <div>
        <img src={mcnews} alt="mc-news-logo" />
      </div>
      <div className={styles.userHeader}>
        {username && (
          <>
            <div className={styles.buttonContainer}>
              <button className={styles.button}>
                <Link to="/article">Post Article</Link>
              </button>
              <button
                className={styles.button}
                value={null}
                onClick={e => setSelectedUser(e)}
              >
                log out
              </button>
            </div>
            <h4 className={styles.username}>
              <Icon icon={userIcon} /> {username}
            </h4>
          </>
        )}
        <UserList
          username={username}
          setSelectedUser={setSelectedUser}
          users={users}
        />
      </div>
    </header>
  );
};

export default Header;
