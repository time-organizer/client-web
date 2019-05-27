import React, { Fragment } from 'react';
import Header3 from '../../../../../../../common_components/Texts/Header3';
// import TaskModel from '../../../../../../../../models/Task';

const TaskHistory = (
  // { task }
) => (
  <Fragment>
    <Header3 withMargin>
      History
    </Header3>
  </Fragment>
);

TaskHistory.propTypes = {
  // task: TaskModel.isRequired,
};
TaskHistory.defaultProps = {};

export default TaskHistory;
