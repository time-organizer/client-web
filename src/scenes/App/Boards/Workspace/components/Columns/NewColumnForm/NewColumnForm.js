import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ColumnWrapper from '../ColumnWrapper';
import Input from '../../../../../../components/BorderInput';
import Fade from '../../../../../../components/transitions/Fade';
import ErrorMessage from '../../../../../../components/ErrorMessage';

const NewColumnForm = ({
  title, handleInputChange, addingColumnActive, toggleAddingColumn, submitNewColumn, submitError,
}) => (
  <ColumnWrapper>
    {!addingColumnActive && (
      <div className="clickable" onClick={toggleAddingColumn}>
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
  </ColumnWrapper>
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
