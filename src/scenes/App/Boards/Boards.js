import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import BoardsList from './List/BoardsList';
import NewBoardForm from './New/NewBoardForm';
import BoardsWorkspace from './Workspace';

const Boards = ({ newBoardFormOpened }) => (
  <Fragment>
    <Switch>
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
