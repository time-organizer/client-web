import React from 'react';
import PropTypes from 'prop-types';
import { TextArea } from '../../../../../../../../common_components';

const TaskDescriptionEditor = ({ description, onChange }) => (
  <TextArea
    onChange={onChange}
    name="description"
    value={description}
  />
);

TaskDescriptionEditor.propTypes = {
  description: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
TaskDescriptionEditor.defaultProps = {
  description: '',
};

export default TaskDescriptionEditor;
