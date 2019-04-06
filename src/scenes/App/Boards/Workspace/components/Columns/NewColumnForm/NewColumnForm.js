import React from 'react';
import PropTypes from 'prop-types';

import Fade from '../../../../../../components/transitions/Fade';
import Button from '../../../../../../components/Button';
import ColumnForms from '../ColumnForms';

import './NewColumnForm.css';
import { buttonTypes } from '../../../../../../components/Button/Button';

const NewColumnForm = ({
  title,
  handleInputChange,
  addingColumnActive,
  toggleAddingColumn,
  submitNewColumn,
  submitError,
  handleSelectChange,
  type,
}) => (
  <div className="column-wrapper">
    {!addingColumnActive && (
      <div className="new-column-button" onClick={toggleAddingColumn}>
        <h3>Add new column</h3>
      </div>
    )}
    <Fade trigger={addingColumnActive}>
      <div className="column-content-wrapper">
        <ColumnForms
          handleSelectChange={handleSelectChange}
          handleInputChange={handleInputChange}
          submitError={submitError}
          title={title}
          type={type}
        />
        <Button onClick={submitNewColumn} buttonType={buttonTypes.SUBMIT}>Submit</Button>
      </div>
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
  handleSelectChange: PropTypes.func.isRequired,
  type: PropTypes.oneOfType([PropTypes.node, PropTypes.shape()]),
};
NewColumnForm.defaultProps = {
  title: '',
  addingColumnActive: false,
  submitError: false,
  type: null,
};

export default NewColumnForm;
