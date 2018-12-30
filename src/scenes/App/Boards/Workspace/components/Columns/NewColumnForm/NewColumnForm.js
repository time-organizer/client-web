import React from 'react';
import PropTypes from 'prop-types';

import ColumnWrapper from '../ColumnWrapper';
import Input from '../../../../../../components/BorderInput';
import Fade from '../../../../../../components/transitions/Fade';

const NewColumnForm = ({
  title, handleInputChange, addingColumnActive, toggleAddingColumn, submitNewColumn,
}) => (
  <ColumnWrapper>
    {!addingColumnActive && <div onClick={toggleAddingColumn}>Add new board</div>}
    <Fade trigger={addingColumnActive}>
      <Input
        name="title"
        value={title}
        onChange={handleInputChange}
        placeholder="Add new column"
        icon="icon-paper-plane-o"
        onButtonClick={submitNewColumn}
        focus
      />
    </Fade>
  </ColumnWrapper>
);

NewColumnForm.propTypes = {
  title: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  toggleAddingColumn: PropTypes.func.isRequired,
  addingColumnActive: PropTypes.bool,
  submitNewColumn: PropTypes.func.isRequired,
};
NewColumnForm.defaultProps = {
  title: '',
  addingColumnActive: false,
};

export default NewColumnForm;
