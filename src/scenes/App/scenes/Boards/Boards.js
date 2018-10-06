import React from 'react';

import ContentLayout from '../../components/ContentLayout';
import ContentHeader from '../../components/ContentHeader';
import Content from '../../components/Content';
import BoardsList from './components/BoardsList';

const Boards = () => (
  <ContentLayout>
    <ContentHeader headerName="Boards" />
    <Content>
      <BoardsList />
    </Content>
  </ContentLayout>
);

export default Boards;
