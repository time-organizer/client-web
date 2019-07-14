import React from 'react';
import PropTypes from 'prop-types';

import SimpleWidget from '../../Widget/types/SimpleWidget';

const WidgetCompletedTasks = ({ data }) => (
  <SimpleWidget
    value={data.completedTasksNumber}
    title="Tasks"
  />
);

WidgetCompletedTasks.propTypes = {
  data: PropTypes.shape({
    completedTasksNumber: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }).isRequired,
};
WidgetCompletedTasks.defaultProps = {};

export default WidgetCompletedTasks;
