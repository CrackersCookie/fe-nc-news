import React from "react";
import styles from "./UserCard.module.css";
import { Link } from "@reach/router";

const UserCard = ({ user }) => {
  const { avatar_url, username } = user;
  return (
    <Link to={`/users/${username}`}>
      <div className={styles.users}>
        <h3>{username}</h3>
        <img src={avatar_url} alt="profile" className={styles.image} />
      </div>
    </Link>
  );
};

export default UserCard;
