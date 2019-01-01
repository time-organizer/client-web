import React from 'react';
import PropTypes from 'prop-types';

import ColumnWrapper from '../ColumnWrapper';
import NewTaskButton from '../../Tasks/NewTaskButton';
import Task from '../../Tasks/Task';

import './Column.css';

const Column = ({ column }) => (
  <ColumnWrapper>
    <div className="column">
      <div className="column-title">{column.title}</div>
    </div>
    <Task />
    <Task />
    <Task />
    <Task />
    <NewTaskButton />
  </ColumnWrapper>
);

Column.propTypes = {
  column: PropTypes.shape({}).isRequired,
};
Column.defaultProps = {};

export default Column;
