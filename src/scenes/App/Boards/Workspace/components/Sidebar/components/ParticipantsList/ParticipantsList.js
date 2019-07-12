import React from 'react';
import PropTypes from 'prop-types';
import ParticipantListItem from './ParticipantListItem';

const ParticipantsList = ({ participants }) => participants.length > 0 && (
  <div className="margin-bottom-8">
    {participants.map(participant => (
      <ParticipantListItem
        key={participant}
        participant={participant}
      />
    ))}
  </div>
);

ParticipantsList.propTypes = {
  participants: PropTypes.arrayOf(PropTypes.string),
};
ParticipantsList.defaultProps = {
  participants: [],
};

export default ParticipantsList;
