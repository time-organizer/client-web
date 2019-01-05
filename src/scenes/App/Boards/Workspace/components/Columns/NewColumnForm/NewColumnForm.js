import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Input from '../../../../../../components/BorderInput';
import Fade from '../../../../../../components/transitions/Fade';
import ErrorMessage from '../../../../../../components/ErrorMessage';

import './NewColumnForm.css';

const NewColumnForm = ({
  title, handleInputChange, addingColumnActive, toggleAddingColumn, submitNewColumn, submitError,
}) => (
  <div className="column-wrapper">
    {!addingColumnActive && (
      <div className="new-column-button" onClick={toggleAddingColumn}>
        <h3>Add new column</h3>
      </div>
    )}
    <Fade trigger={addingColumnActive}>
      <Fragment>
        <Input
          name="title"
          value={title}
          onChange={handleInputChange}
          placeholder="Add new column"
          icon="icon-paper-plane-o"
          onButtonClick={submitNewColumn}
          focus
        />
        {submitError && !title.length && (
          <ErrorMessage message="Provide a title" />
        )}
      </Fragment>
    </Fade>
  </div>
);

NewColumnForm.propTypes = {
  title: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  toggleAddingColumn: PropTypes.func.isRequired,
  addingColumnActive: PropTypes.bool,
  submitNewColumn: PropTypes.func.isRequired,
  submitError: PropTypes.bool,
};
NewColumnForm.defaultProps = {
  title: '',
  addingColumnActive: false,
  submitError: false,
};

export default NewColumnForm;
