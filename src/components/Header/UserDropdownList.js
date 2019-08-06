import React, { Component } from 'react';
import * as api from "../../api"
import LoadingSpinner from '../LoadingSpinner';
import UsersList from './UsersList';
import styles from "./UserDropdownList.module.css"

class UserDropdownList extends Component {

  state = {
    users: null,
    isLoading: true
  }

  render() {
    const { users, isLoading } = this.state
    if (isLoading) return <LoadingSpinner />
    console.log(this.props.username)
    return (
      <form>
        <label>select user: </label>
        <select className={styles.select} value={this.props.username} onChange={this.props.setSelectedUser}>
          {users.map(user => {
            return <UsersList key={user.username} user={user} />
          })}
        </select>
      </form>
    );
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    api.getUsers().then(users =>
      this.setState({ users, isLoading: false }))
  }
}

export default UserDropdownList;