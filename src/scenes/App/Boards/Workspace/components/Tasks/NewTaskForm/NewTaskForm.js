import React from 'react';
import PropTypes from 'prop-types';
import Popup from '../../../../../../components/Popup/Popup';

const NewTaskForm = ({ onClose }) => (
  <div>
    <Popup onClose={onClose} popupType="small" title="Add new task" />
  </div>
);

NewTaskForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
NewTaskForm.defaultProps = {};

export default NewTaskForm;
