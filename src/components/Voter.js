import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import downArrow from '@iconify/icons-emojione/down-arrow';
import upArrow from '@iconify/icons-emojione/down-arrow';


class Voter extends Component {
  state = {}

  render() {
    return (
      <>
        <button>{<Icon icon={upArrow} />}</button>
        <p>{this.props.votes}</p>
        <button>{<Icon icon={downArrow} />}</button>
      </>
    );
  }
}

export default Voter;
