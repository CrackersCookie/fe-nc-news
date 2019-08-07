import React from "react";

const UserList = ({ user: { username } }) => {
  return <option value={username}>{username}</option>;
};

export default UserList;
