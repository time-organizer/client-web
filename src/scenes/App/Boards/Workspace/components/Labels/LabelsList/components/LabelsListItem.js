import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import './LabelsListItem.css';
import Paragraph from '../../../../../../../common_components/Texts/Paragraph';
import LabelModel from '../../../../../../../../models/Label';

const LabelsListItem = ({ label, onLabelClick, active }) => {
  const { _id, color, title } = label;

  return (
    <div
      className={c('labels-list-item', { active })}
      onClick={onLabelClick ? () => onLabelClick(_id) : () => {}}
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
  active: PropTypes.bool,
};
LabelsListItem.defaultProps = {
  active: false,
};

export default LabelsListItem;
