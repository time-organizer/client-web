import React from 'react';
import ContentHeader from '../../../../components/ContentHeader/ContentHeader';
import ContentLayoutFull from '../../../../components/ContentLayoutFull';
import WorkspaceBackground from './components/WorkspaceBackground';

const Workspace = () => (
  <ContentLayoutFull>
    <WorkspaceBackground>
      <ContentHeader headerName="Boards" />
      workspacenjnjn
    </WorkspaceBackground>
  </ContentLayoutFull>
);

Workspace.propTypes = {};
Workspace.defaultProps = {};

export default Workspace;
