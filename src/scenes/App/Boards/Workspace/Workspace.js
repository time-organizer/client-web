import React from 'react';

import ContentLayoutFull from '../../components/ContentLayoutFull';
import ContentSidebar from '../../components/ContentSidebar';
import WorkspaceBackground from './components/WorkspaceBackground';
import DragAndDrop from './components/DragAndDrop';

import './Workspace.css';
import { BoardModel } from '../../../../models/Board';

const Workspace = ({ board }) => (
  <ContentLayoutFull>
    <WorkspaceBackground themeId={board.theme}>
      <div className="workspace-columns-wrapper">
        <ContentSidebar board={board} />
        <DragAndDrop />
      </div>
    </WorkspaceBackground>
  </ContentLayoutFull>
);

Workspace.propTypes = {
  board: BoardModel,
};
Workspace.defaultProps = {
  board: null,
};

export default Workspace;
