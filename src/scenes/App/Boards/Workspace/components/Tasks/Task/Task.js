import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ task }) => (
  <div className="task">
    <p>{task.title}</p>
  </div>
);

Task.propTypes = {
  task: PropTypes.shape().isRequired,
};
Task.defaultProps = {};

export default Task;
