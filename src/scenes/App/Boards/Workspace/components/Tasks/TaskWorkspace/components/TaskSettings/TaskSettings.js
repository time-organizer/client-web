import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header3 from '../../../../../../../../common_components/Texts/Header3';
import LabelsList from '../../../../Labels/LabelsList';

const TaskSettings = ({ toggleLabel }) => (
  <Fragment>
    <Header3 withMargin>
      Settings
    </Header3>
    <LabelsList
      withNewButton
      onLabelClick={toggleLabel}
    />
  </Fragment>
);

TaskSettings.propTypes = {
  toggleLabel: PropTypes.func.isRequired,
};
TaskSettings.defaultProps = {};

export default TaskSettings;
