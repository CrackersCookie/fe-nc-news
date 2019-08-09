import React, { Component } from "react";
import styles from "./CreateUserForm.module.css";
import * as api from "../../api";
import { navigate } from "@reach/router";

class CreateUserForm extends Component {
  state = {
    name: "",
    username: "",
    avatar_url: "",
    error: null
  };

  render() {
    const { name, username, avatar_url } = this.state;

    return (
      <article className={styles.user}>
        <form onSubmit={this.handleSubmit} className={styles.postForm}>
          <input
            value={name}
            onChange={this.handleTextChange}
            type="text"
            name="name"
            placeholder="Name..."
            required
          />
          <input
            value={username}
            onChange={this.handleTextChange}
            type="text"
            name="username"
            placeholder="Username..."
            required
          />
          <input
            value={avatar_url}
            onChange={this.handleTextChange}
            type="text"
            name="avatar_url"
            placeholder="Please add a link to your profile image..."
          />
          <input type="submit" value="Submit" />
        </form>
      </article>
    );
  }

  handleTextChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, username, avatar_url } = this.state;
    e.preventDefault();
    api
      .postUser({ name, username, avatar_url })
      .then(user => {
        console.log(user);
        navigate(`/users/${user.username}`);
      })
      .catch(({ response }) => {
        const error = { status: response.status, msg: response.data.msg };
        this.setState({ error, isLoading: false });
      });
  };
}

export default CreateUserForm;
