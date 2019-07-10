import React from 'react';
import PropTypes from 'prop-types';

const ParticipantListItem = ({ participant }) => (
  <div>
    {participant}
  </div>
);

ParticipantListItem.propTypes = {
  participant: PropTypes.string.isRequired,
};
ParticipantListItem.defaultProps = {};

export default ParticipantListItem;
