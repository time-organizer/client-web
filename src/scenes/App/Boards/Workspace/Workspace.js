import React from 'react';
import PropTypes from 'prop-types';

import ContentLayoutFull from '../../components/ContentLayoutFull';
import ContentSidebar from '../../components/ContentSidebar';
import WorkspaceBackground from './components/WorkspaceBackground';
import DragAndDrop from './components/DragAndDrop';

import './Workspace.css';

const Workspace = ({ boardData }) => (
  <ContentLayoutFull>
    {boardData && (
      <WorkspaceBackground themeId={boardData.theme}>
        <div className="workspace-columns-wrapper">
          <ContentSidebar board={boardData} />
          <DragAndDrop />
        </div>
      </WorkspaceBackground>
    )}
  </ContentLayoutFull>
);

Workspace.propTypes = {
  boardData: PropTypes.shape(),
};
Workspace.defaultProps = {
  boardData: null,
};

export default Workspace;
