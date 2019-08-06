import React from 'react';

const UserList = ({ user }) => {
  return (
    <option value={user.username}>{user.username}</option>
  );
};

export default UserList;