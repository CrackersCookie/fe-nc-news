import React, { Component } from "react";
import { Icon } from "@iconify/react";
import triangleUp from "@iconify/icons-octicon/triangle-up";
import triangleDown from "@iconify/icons-octicon/triangle-down";
import * as api from "../api";
import styles from "./Voter.module.css";
import thumbsUp from "@iconify/icons-fa-regular/thumbs-up";

class Voter extends Component {
  state = {
    voteChange: 0
  };

  render() {
    const { voteChange } = this.state;
    const { votes, username } = this.props;

    return (
      <>
        {username && (
          <button
            className={styles.button}
            onClick={() => this.handleVotes(1)}
            disabled={voteChange >= 1}
          >
            {<Icon icon={triangleUp} />}
          </button>
        )}
        <p>
          <Icon icon={thumbsUp} /> {votes + voteChange}
        </p>
        {username && (
          <button
            className={styles.button}
            onClick={() => this.handleVotes(-1)}
            disabled={voteChange <= -1}
          >
            {<Icon icon={triangleDown} />}
          </button>
        )}
      </>
    );
  }

  handleVotes = inc_votes => {
    const { article_id, comment_id } = this.props;
    api.updateVotes(article_id, comment_id, inc_votes).catch(error => {
      this.setState(({ voteChange }) => {
        return { voteChange: voteChange - inc_votes };
      });
    });
    this.setState(({ voteChange }) => {
      return { voteChange: voteChange + inc_votes };
    });
  };
}

export default Voter;
