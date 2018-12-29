import React from 'react';
import PropTypes from 'prop-types';

import ColumnWrapper from '../ColumnWrapper';
import Input from '../../../../../../components/BorderInput';

const NewColumnForm = ({
  title, handleInputChange, addingColumnActive, toggleAddingColumn,
}) => (
  <ColumnWrapper>
    {!addingColumnActive
      ? <div onClick={toggleAddingColumn}>Add new board</div>
      : (
        <Input
          name="title"
          value={title}
          onChange={handleInputChange}
          placeholder="Add new board"
        />
      )
    }
  </ColumnWrapper>
);

NewColumnForm.propTypes = {
  title: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  toggleAddingColumn: PropTypes.func.isRequired,
  addingColumnActive: PropTypes.bool,
};
NewColumnForm.defaultProps = {
  title: '',
  addingColumnActive: false,
};

export default NewColumnForm;
