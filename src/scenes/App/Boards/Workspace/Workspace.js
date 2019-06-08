import React from 'react';
import PropTypes from 'prop-types';

import ContentLayoutFull from '../../components/ContentLayoutFull';
import Sidebar from './components/Sidebar';
import WorkspaceBackground from './components/WorkspaceBackground';
import DragAndDrop from './components/DragAndDrop';

import './Workspace.css';
import { BoardModel } from '../../../../models/Board';
import NewLabel from './components/Labels/NewLabel';

const Workspace = ({ board, newLabelFormOpened }) => (
  <ContentLayoutFull>
    <WorkspaceBackground themeId={board.theme}>
      <div className="workspace-columns-wrapper">
        <Sidebar board={board} />
        <DragAndDrop />
      </div>
    </WorkspaceBackground>
    {newLabelFormOpened && <NewLabel />}
  </ContentLayoutFull>
);

Workspace.propTypes = {
  board: BoardModel,
  newLabelFormOpened: PropTypes.bool.isRequired,
};
Workspace.defaultProps = {
  board: null,
};

export default Workspace;
