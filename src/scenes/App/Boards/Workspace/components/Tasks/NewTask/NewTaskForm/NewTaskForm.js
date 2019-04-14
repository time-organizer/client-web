import React from 'react';
import PropTypes from 'prop-types';

import { PopupFooter, BorderInput, Popup } from '../../../../../../../common_components';

const NewTaskForm = ({
  onClose, onSubmit, onChange, values,
}) => (
  <Popup
    onClose={onClose}
    popupType="small"
    title="Add new task"
    footer={(
      <PopupFooter
        cancel={onClose}
        accept={onSubmit}
      />
    )}
  >
    <BorderInput
      placeholder="Title"
      onChange={onChange}
      name="title"
      value={values.title}
      focus
    />
  </Popup>
);

NewTaskForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
NewTaskForm.defaultProps = {};

export default NewTaskForm;
