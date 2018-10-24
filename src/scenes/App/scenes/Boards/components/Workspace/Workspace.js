import React from 'react';
import ContentHeader from '../../../../components/ContentHeader/ContentHeader';
import ContentLayoutFull from '../../../../components/ContentLayoutFull';

const Workspace = () => (
  <ContentLayoutFull>
    <ContentHeader headerName="Boards" />
    workspace
  </ContentLayoutFull>
);

Workspace.propTypes = {};
Workspace.defaultProps = {};

export default Workspace;
