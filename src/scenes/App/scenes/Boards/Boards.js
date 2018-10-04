import React from 'react';

import ContentLayout from '../../components/ContentLayout';
import ContentHeader from '../../components/ContentHeader';
import Content from '../../components/Content';


const Boards = () => (
  <ContentLayout>
    <ContentHeader headerName="Boards" />
    <Content>
      Content
    </Content>
  </ContentLayout>
);

Boards.propTypes = {};
Boards.defaultProps = {};

export default Boards;
