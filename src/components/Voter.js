import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import downArrow from '@iconify/icons-emojione/down-arrow';
import upArrow from '@iconify/icons-emojione/down-arrow';
import * as api from "../api"


class Voter extends Component {
  state = {
    voteChange: 0
  }

  render() {
    const { voteChange } = this.state
    const { votes } = this.props
    return (
      <>
        <button onClick={() => this.handleVotes(1)} disabled={(voteChange >= 1)}>{<Icon icon={upArrow} />}</button>
        <p>{votes + voteChange}</p>
        <button onClick={() => this.handleVotes(-1)} disabled={(voteChange <= -1)}>{<Icon icon={downArrow} />}</button>
      </>
    );
  }

  handleVotes = (inc_votes) => {
    const { article_id } = this.props
    api.updateVotes(article_id, inc_votes)
    this.setState(({ voteChange }) => {
      return { voteChange: voteChange + inc_votes }
    })
  }

}

export default Voter;
