import React from 'react';
import PropTypes from 'prop-types';

const ParticipantListItem = ({ participant }) => (
  <div className="margin-bottom-8">
    {participant}
  </div>
);

ParticipantListItem.propTypes = {
  participant: PropTypes.string.isRequired,
};
ParticipantListItem.defaultProps = {};

export default ParticipantListItem;
