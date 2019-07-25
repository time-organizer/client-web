import React from 'react';
import PropTypes from 'prop-types';
import SimpleWidget from '../../Widget/types/SimpleWidget';

const WidgetAllTasks = ({ data }) => (
  <SimpleWidget
    value={data.allTasks}
    title="Tasks"
  />
);

WidgetAllTasks.propTypes = {
  data: PropTypes.shape({
    allTasks: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }).isRequired,
};
WidgetAllTasks.defaultProps = {};

export default WidgetAllTasks;
