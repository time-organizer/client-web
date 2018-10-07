import React from 'react';
import PropTypes from 'prop-types';

import ContentLayout from '../../components/ContentLayout';
import ContentHeader from '../../components/ContentHeader';
import Content from '../../components/Content';
import BoardsList from './components/BoardsList';
import NewBoardForm from './components/NewBoardForm';

const Boards = ({ newBoardFormOpened }) => (
  <ContentLayout>
    <ContentHeader headerName="Boards" />
    <Content>
      <BoardsList />
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
