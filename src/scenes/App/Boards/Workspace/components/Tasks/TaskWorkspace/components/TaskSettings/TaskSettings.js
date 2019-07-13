import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header3 from '../../../../../../../../common_components/Texts/Header3';
import LabelsList from '../../../../Labels/LabelsList';

const TaskSettings = ({ toggleLabel, isLabelActive }) => (
  <Fragment>
    <Header3 withMargin className="task-workspace-section-header">
      Settings
    </Header3>
    <LabelsList
      withNewButton
      onLabelClick={toggleLabel}
      isLabelActive={isLabelActive}
    />
  </Fragment>
);

TaskSettings.propTypes = {
  toggleLabel: PropTypes.func.isRequired,
  isLabelActive: PropTypes.func.isRequired,
};
TaskSettings.defaultProps = {};

export default TaskSettings;
