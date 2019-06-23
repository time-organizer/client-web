import React from 'react';
import PropTypes from 'prop-types';
import { buttonTypes } from '../../../../../../common_components/Button';
import { Button } from '../../../../../../common_components';
import LabelsListItem from './components/LabelsListItem';
import LabelModel from '../../../../../../../models/Label';

import './LabelsList.css';

const LabelsList = ({ toggleNewLabelForm, withNewButton, labels }) => (
  <div className="labels-list">
    {!!withNewButton && (
      <Button
        onClick={toggleNewLabelForm}
        buttonType={buttonTypes.SUBMIT}
        fullWidth
      >
        Add new label
      </Button>
    )}
    {labels.map(label => (
      <LabelsListItem
        key={label._id}
        label={label}
      />
    ))}
  </div>
);

LabelsList.propTypes = {
  toggleNewLabelForm: PropTypes.func.isRequired,
  withNewButton: PropTypes.bool,
  labels: PropTypes.arrayOf(LabelModel),
};
LabelsList.defaultProps = {
  withNewButton: false,
  labels: [],
};

export default LabelsList;
