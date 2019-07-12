import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import BoardsList from './List/BoardsList';
import NewBoardForm from './New/NewBoardForm';
import BoardsWorkspace from './Workspace';
import TaskWorkspace from './Workspace/components/Tasks/TaskWorkspace/TaskWorkspaceContainer';
import Dashboard from './Dashboard';

const Boards = ({ newBoardFormOpened }) => (
  <Fragment>
    <Route path="/boards/:id/:taskId" component={TaskWorkspace} />
    <Switch>
      <Route path="/boards/:id/dashboard" component={Dashboard} />
      <Route path="/boards/:id" component={BoardsWorkspace} />
      <Route path="/boards/" component={BoardsList} />
    </Switch>
    {newBoardFormOpened && (
      <NewBoardForm />
    )}
  </Fragment>
);

Boards.propTypes = {
  newBoardFormOpened: PropTypes.bool.isRequired,
};

export default Boards;
