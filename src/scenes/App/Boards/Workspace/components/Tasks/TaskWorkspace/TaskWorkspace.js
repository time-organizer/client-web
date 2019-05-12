import React from 'react';
import PropTypes from 'prop-types';

import { Popup } from '../../../../../../common_components';

const TaskWorkspace = ({ closeTaskWorkspace }) => (
  <Popup onClose={closeTaskWorkspace} />
);

TaskWorkspace.propTypes = {
  closeTaskWorkspace: PropTypes.func.isRequired,
};
TaskWorkspace.defaultProps = {};

export default TaskWorkspace;
