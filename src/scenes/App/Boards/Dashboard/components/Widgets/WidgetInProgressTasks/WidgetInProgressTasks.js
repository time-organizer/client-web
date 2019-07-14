import React from 'react';
import PropTypes from 'prop-types';

import SimpleWidget from '../../Widget/types/SimpleWidget';

const WidgetInProgressTasks = ({ data }) => (
  <SimpleWidget
    value={data.inProgressTasks}
    title="Tasks"
  />
);

WidgetInProgressTasks.propTypes = {
  data: PropTypes.shape({
    inProgressTasks: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }).isRequired,
};
WidgetInProgressTasks.defaultProps = {};

export default WidgetInProgressTasks;
