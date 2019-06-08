import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from '../../../../../../common_components';

const NewLabel = ({ toggleNewLabelForm }) => (
  <Popup
    onClose={toggleNewLabelForm}
  />
);

NewLabel.propTypes = {
  toggleNewLabelForm: PropTypes.func.isRequired,
};
NewLabel.defaultProps = {};

export default NewLabel;
