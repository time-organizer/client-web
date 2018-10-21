import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import ContentLayout from '../../components/ContentLayout';
import ContentHeader from '../../components/ContentHeader';
import BoardsList from './components/BoardsList';
import BoardsWorkspace from './components/Workspace';
import NewBoardForm from './components/NewBoardForm';
import Content from '../../components/Content/Content';

const Boards = ({ newBoardFormOpened }) => (
  <ContentLayout>
    <ContentHeader headerName="Boards" />
    <Content>
      <Switch>
        <Route path="/app/boards/" component={BoardsList} />
        <Route path="/app/boards/:id" component={BoardsWorkspace} />
      </Switch>
    </Content>
    {newBoardFormOpened && (
      <NewBoardForm />
    )}
  </ContentLayout>
);

Boards.propTypes = {
  newBoardFormOpened: PropTypes.bool.isRequired,
};

export default Boards;
