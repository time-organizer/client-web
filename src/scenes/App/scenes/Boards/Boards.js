import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import BoardsList from './components/BoardsList';
import NewBoardForm from './components/NewBoardForm';
import BoardsWorkspace from './components/Workspace';

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
