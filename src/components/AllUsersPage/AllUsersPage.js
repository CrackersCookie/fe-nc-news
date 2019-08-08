import React from "react";
import UserCard from "./UserCard";
import styles from "./AllUsersPage.module.css";

const AllUsers = ({ users }) => {
  return (
    <section>
      <h1>all users</h1>
      <div className={styles.section}>
        {users.map(user => {
          return <UserCard key={user.username} user={user} />;
        })}
      </div>
    </section>
  );
};

export default AllUsers;
