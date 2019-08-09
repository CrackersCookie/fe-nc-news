import React, { Component } from "react";
import styles from "./CreateUserForm.module.css";
import * as api from "../../api";
import { navigate } from "@reach/router";
import profileAssets from "../Assets/profileImages.js";
import ErrorDisplay from "../ErrorDisplay";

class CreateUserForm extends Component {
  state = {
    name: "",
    username: "",
    avatar_url: "select avatar",
    profileImages: profileAssets,
    error: null,
    valid: true
  };

  render() {
    const {
      name,
      username,
      avatar_url,
      profileImages,
      error,
      valid
    } = this.state;
    if (error) return <ErrorDisplay status={error.status} msg={error.msg} />;

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
            onBlur={this.handleBlur}
            onChange={this.handleTextChange}
            type="text"
            name="username"
            placeholder="Username..."
            required
          />
          {!valid && (
            <p className={styles.red}>
              username can only contain letters and numbers
            </p>
          )}
          <select
            value={avatar_url}
            onChange={this.handleOptionChange}
            className={styles.select}
          >
            <option value="select avatar">select avatar</option>
            {profileImages.map(profile => {
              return (
                <option key={profile.image} value={profile.image}>
                  {profile.name}
                </option>
              );
            })}
          </select>
          <input
            className={styles.button}
            type="submit"
            value="Submit"
            disabled={avatar_url === "select avatar" || valid === false}
          />
        </form>
        {avatar_url !== "select avatar" && (
          <img src={avatar_url} alt="selected profile" />
        )}
      </article>
    );
  }

  handleTextChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleOptionChange = ({ target: { value } }) => {
    if (value) this.setState({ avatar_url: value });
  };

  handleBlur = ({ target: { value } }) => {
    const regex = /^[0-9a-zA-Z]+$/;
    if (!value.match(regex)) this.setState({ valid: false });
    else this.setState({ valid: true });
  };

  handleSubmit = e => {
    const { name, username, avatar_url } = this.state;
    e.preventDefault();
    api
      .postUser({ name, username, avatar_url })
      .then(user => {
        navigate(`/users/${user.username}`);
      })
      .catch(({ response }) => {
        const error = { status: response.status, msg: response.data.msg };
        this.setState({ error, isLoading: false });
      });
  };
}

export default CreateUserForm;
