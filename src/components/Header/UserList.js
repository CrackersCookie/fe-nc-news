import React from "react";
import User from "./User";
import styles from "./UserList.module.css";

const UserList = ({ loggedInUser, setSelectedUser, users }) => {
  return (
    <>
      <form className={styles.formSelectUser}>
        <label className={styles.label}>user: </label>
        <select
          className={styles.select}
          value={loggedInUser}
          onChange={setSelectedUser}
        >
          {users.map(user => {
            return <User key={user.username} user={user} />;
          })}
        </select>
      </form>
    </>
  );
};

export default UserList;
