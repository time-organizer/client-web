import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from '../../../../../../common_components';
import { popupLayers, popupTypes } from '../../../../../../common_components/Popup/Popup';

const NewLabel = ({ toggleNewLabelForm }) => (
  <Popup
    popupLayer={popupLayers.higher}
    popupType={popupTypes.medium}
    onClose={toggleNewLabelForm}
    title="Add new label"
  />
);

NewLabel.propTypes = {
  toggleNewLabelForm: PropTypes.func.isRequired,
};
NewLabel.defaultProps = {};

export default NewLabel;
