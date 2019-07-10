import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  buttonTypes,
  ErrorMessage,
  TextArea,
} from '../../../../../../../../common_components';

const TaskDescriptionEditor = ({
  description, onChange, updateTask, formErrors,
}) => (
  <Fragment>
    <TextArea
      onChange={onChange}
      name="description"
      value={description}
    />
    <Button
      className="margin-8 pull-right"
      onClick={updateTask}
      buttonType={buttonTypes.SUBMIT}
    >
      Submit
    </Button>
    {formErrors.map(formError => (
      <ErrorMessage
        key={formError}
        message={formError}
      />
    ))}
  </Fragment>
);

TaskDescriptionEditor.propTypes = {
  description: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  formErrors: PropTypes.arrayOf(PropTypes.string),
};
TaskDescriptionEditor.defaultProps = {
  description: '',
  formErrors: [],
};

export default TaskDescriptionEditor;
