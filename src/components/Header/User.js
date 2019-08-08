import React from "react";

const User = ({ user: { username } }) => {
  return <option value={username}>{username}</option>;
};

export default User;
