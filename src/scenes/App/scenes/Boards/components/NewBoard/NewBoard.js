import React, { Component } from 'react';

import './NewBoard.css';
import '../BoardListItem/BoardListItem.css';

class NewBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="board-list-item-wrapper">
        <div className="new-board-button board-list-item">
          <i className="icon-add" />
        </div>
      </div>
    );
  }
}

NewBoard.propTypes = {};
NewBoard.defaultProps = {};

export default NewBoard;
