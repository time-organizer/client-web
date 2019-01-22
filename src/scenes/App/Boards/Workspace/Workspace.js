import React from 'react';
import PropTypes from 'prop-types';

import ContentHeader from '../../components/ContentHeader/ContentHeader';
import ContentLayoutFull from '../../components/ContentLayoutFull';
import WorkspaceBackground from './components/WorkspaceBackground';
import DragAndDrop from './components/DragAndDrop';

import './Workspace.css';

const Workspace = ({ boardData }) => (
  <ContentLayoutFull>
    {boardData && (
      <WorkspaceBackground themeId={boardData.theme}>
        <ContentHeader headerName={boardData.title} />
        <div className="workspace-columns-wrapper">
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
