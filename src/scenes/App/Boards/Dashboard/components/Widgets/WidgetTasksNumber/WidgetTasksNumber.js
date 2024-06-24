import React from 'react';
import PropTypes from 'prop-types';
import SimpleWidget from '../../Widget/types/SimpleWidget';

const WidgetTasksNumber = ({ data }) => (
  <SimpleWidget
    value={data.tasksNumber}
    title="Tasks"
  />
);

WidgetTasksNumber.propTypes = {
  data: PropTypes.shape({
    tasksNumber: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }).isRequired,
};
WidgetTasksNumber.defaultProps = {};

export default WidgetTasksNumber;
