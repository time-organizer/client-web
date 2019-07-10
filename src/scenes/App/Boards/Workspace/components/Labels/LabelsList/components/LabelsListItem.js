import React from 'react';
import PropTypes from 'prop-types';

import './LabelsListItem.css';
import Paragraph from '../../../../../../../common_components/Texts/Paragraph';
import LabelModel from '../../../../../../../../models/Label';

const LabelsListItem = ({ label, onLabelClick }) => {
  const { _id, color, title } = label;

  return (
    <div
      className="labels-list-item"
      onClick={onLabelClick ? () => onLabelClick(_id) : null}
    >
      <Paragraph className="labels-list-item-title">
        {title}
      </Paragraph>
      <div className="color-square" style={{ backgroundColor: color }} />
    </div>
  );
};

LabelsListItem.propTypes = {
  label: LabelModel.isRequired,
  onLabelClick: PropTypes.func.isRequired,
};
LabelsListItem.defaultProps = {};

export default LabelsListItem;
