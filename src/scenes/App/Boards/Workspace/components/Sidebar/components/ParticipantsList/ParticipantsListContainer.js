import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';

import ParticipantsList from './ParticipantsList';
import ParticipantForm from './ParticipantForm';
import handleInputChange from '../../../../../../../../utilities/handleInputChange';
import { updateBoard } from '../../../../actions';

class ParticipantsListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newParticipantEmail: '',
      formOpened: false,
    };

    this.handleInputChange = handleInputChange.bind(this);
  }

  toggleFormOpened = () => this.setState(prevState => ({
    formOpened: !prevState.formOpened,
  }));

  addNewParticipant = () => {
    const { participants, onBoardUpdate, boardId } = this.props;
    const { newParticipantEmail } = this.state;

    const newData = {
      participants: [
        ...participants,
        newParticipantEmail,
      ],
    };

    if (newParticipantEmail.trim().length > 0) {
      onBoardUpdate(boardId, newData)
        .then(this.toggleFormOpened)
        .catch(() => {});
    }
  };

  render() {
    const { participants } = this.props;
    const { newParticipantEmail, formOpened } = this.state;

    return (
      <Fragment>
        <ParticipantsList participants={participants} />
        <ParticipantForm
          email={newParticipantEmail}
          handleInputChange={this.handleInputChange}
          addNewParticipant={this.addNewParticipant}
          toggleFormOpened={this.toggleFormOpened}
          formOpened={formOpened}
        />
      </Fragment>
    );
  }
}

ParticipantsListContainer.propTypes = {
  participants: PropTypes.arrayOf(PropTypes.string),
  onBoardUpdate: PropTypes.func.isRequired,
  boardId: PropTypes.string,
};
ParticipantsListContainer.defaultProps = {
  participants: [],
  boardId: '',
};

function mapStateToProps({
  boards: { workspace: { board } },
}) {
  const boardData = board.data;
  const participants = get(boardData, 'participants', []);
  const boardId = get(boardData, '_id', '');

  return {
    boardId,
    participants,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onBoardUpdate: (boardId, newData) => dispatch(updateBoard(boardId, newData)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantsListContainer);
