import React from 'react';
import PropTypes from 'prop-types';
import { buttonTypes } from '../../../../../../common_components/Button';
import { Button } from '../../../../../../common_components';
import LabelsListItem from './components/LabelsListItem';
import LabelModel from '../../../../../../../models/Label';

import './LabelsList.css';

const LabelsList = ({
  toggleNewLabelForm, withNewButton, labels, onLabelClick, isLabelActive,
}) => (
  <div className="labels-list">
    {!!withNewButton && (
      <Button
        onClick={toggleNewLabelForm}
        buttonType={buttonTypes.NEUTRAL}
        fullWidth
      >
        Add new label
      </Button>
    )}
    {labels.map(label => (
      <LabelsListItem
        key={label._id}
        label={label}
        onLabelClick={onLabelClick}
        active={isLabelActive(label._id)}
      />
    ))}
  </div>
);

LabelsList.propTypes = {
  toggleNewLabelForm: PropTypes.func.isRequired,
  withNewButton: PropTypes.bool,
  labels: PropTypes.arrayOf(LabelModel),
  onLabelClick: PropTypes.func.isRequired,
  isLabelActive: PropTypes.func.isRequired,
};
LabelsList.defaultProps = {
  withNewButton: false,
  labels: [],
};

export default LabelsList;
