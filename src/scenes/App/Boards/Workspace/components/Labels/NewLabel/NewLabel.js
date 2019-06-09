import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from '../../../../../../common_components';
import { popupLayers } from '../../../../../../common_components/Popup/Popup';
import LabelForms from '../LabelForms';
import { defaultLabelColor } from '../../../../utilities/labelColors';

const NewLabel = ({
  submitNewLabel,
  toggleNewLabelForm,
  handleInputChange,
  handleSelectChange,
  title,
  submitError,
  color,
  startingDate,
  dueDate,
  conflict,
}) => (
  <Popup
    popupLayer={popupLayers.higher}
    onClose={toggleNewLabelForm}
    title="Add new label"
  >
    <LabelForms
      submitNewLabel={submitNewLabel}
      handleInputChange={handleInputChange}
      handleSelectChange={handleSelectChange}
      title={title}
      submitError={submitError}
      color={color}
      startingDate={startingDate}
      dueDate={dueDate}
      conflict={conflict}
    />
  </Popup>
);

NewLabel.propTypes = {
  toggleNewLabelForm: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  submitError: PropTypes.bool,
  color: PropTypes.string,
  startingDate: PropTypes.string,
  dueDate: PropTypes.string,
  submitNewLabel: PropTypes.func.isRequired,
  conflict: PropTypes.bool.isRequired,
};
NewLabel.defaultProps = {
  title: '',
  submitError: false,
  color: defaultLabelColor,
  startingDate: '',
  dueDate: '',
};

export default NewLabel;
