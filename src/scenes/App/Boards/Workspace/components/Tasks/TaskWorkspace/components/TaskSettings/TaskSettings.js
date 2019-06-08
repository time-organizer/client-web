import React, { Fragment } from 'react';
import Header3 from '../../../../../../../../common_components/Texts/Header3';
import LabelsList from '../../../../Labels/LabelsList';

const TaskSettings = () => (
  <Fragment>
    <Header3 withMargin>
      Settings
    </Header3>
    <LabelsList withNewButton />
  </Fragment>
);

TaskSettings.propTypes = {};
TaskSettings.defaultProps = {};

export default TaskSettings;
