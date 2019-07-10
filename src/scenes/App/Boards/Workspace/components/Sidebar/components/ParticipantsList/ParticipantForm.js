import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BorderInput, Button, buttonTypes } from '../../../../../../../common_components';

const ParticipantForm = ({
  handleInputChange, email, toggleFormOpened, formOpened, addNewParticipant,
}) => (
  <Fragment>
    {formOpened && (
      <Fragment>
        <BorderInput
          focus
          value={email}
          onChange={handleInputChange}
          name="newParticipantEmail"
        />
        <Button
          onClick={addNewParticipant}
          buttonType={buttonTypes.SUBMIT}
        >
          Submit
        </Button>
      </Fragment>
    )}
    {!formOpened && (
      <Button onClick={toggleFormOpened} buttonType={buttonTypes.UNDERLINED}>
        Add new participant
      </Button>
    )}
  </Fragment>
);

ParticipantForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  toggleFormOpened: PropTypes.string.isRequired,
  formOpened: PropTypes.bool.isRequired,
  addNewParticipant: PropTypes.func.isRequired,
};
ParticipantForm.defaultProps = {};

export default ParticipantForm;
