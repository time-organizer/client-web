import React from 'react';
import PropTypes from 'prop-types';

import Popup from '../../../../../../../components/Popup/Popup';
import BorderInput from '../../../../../../../components/BorderInput';
import PopupFooter from '../../../../../../../components/Popup/components/PopupFooter';

const NewTaskForm = ({ onClose, onChange, values }) => (
  <Popup
    onClose={onClose}
    popupType="small"
    title="Add new task"
    footer={(
      <PopupFooter
        cancel={onClose}
        accept={() => {}}
      />
    )}
  >
    <BorderInput
      onChange={onChange}
      name="title"
      value={values.title}
    />
  </Popup>
);

NewTaskForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
NewTaskForm.defaultProps = {};

export default NewTaskForm;
