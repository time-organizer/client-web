import React from 'react';

import './LabelsListItem.css';
import Paragraph from '../../../../../../../common_components/Texts/Paragraph';
import LabelModel from '../../../../../../../../models/Label';

const LabelsListItem = ({ label }) => {
  const { color, title } = label;

  return (
    <div className="labels-list-item">
      <Paragraph className="labels-list-item-title">
        {title}
      </Paragraph>
      <div className="color-square" style={{ backgroundColor: color }} />
    </div>
  );
};

LabelsListItem.propTypes = {
  label: LabelModel.isRequired,
};
LabelsListItem.defaultProps = {};

export default LabelsListItem;
