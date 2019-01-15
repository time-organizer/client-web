import React from 'react';
import PropTypes from 'prop-types';

import './NewTaskButton.css';

const NewTaskButton = ({ onClick }) => (
  <div
    className="new-task-button"
    onClick={onClick}
  >
    <i>+</i>
  </div>
);

NewTaskButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
NewTaskButton.defaultProps = {};

export default NewTaskButton;
