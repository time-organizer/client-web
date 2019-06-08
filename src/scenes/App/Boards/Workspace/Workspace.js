import React from 'react';
import PropTypes from 'prop-types';

import ContentLayoutFull from '../../components/ContentLayoutFull';
import Sidebar from './components/Sidebar';
import WorkspaceBackground from './components/WorkspaceBackground';
import DragAndDrop from './components/DragAndDrop';

import './Workspace.css';
import { BoardModel } from '../../../../models/Board';
import NewLabel from './components/Labels/NewLabel';

const Workspace = ({ board, toggleNewLabelForm, newLabelFormOpened }) => (
  <ContentLayoutFull>
    <WorkspaceBackground themeId={board.theme}>
      <div className="workspace-columns-wrapper">
        <Sidebar
          board={board}
          toggleNewLabelForm={toggleNewLabelForm}
        />
        <DragAndDrop />
      </div>
    </WorkspaceBackground>
    {newLabelFormOpened && <NewLabel />}
  </ContentLayoutFull>
);

Workspace.propTypes = {
  board: BoardModel,
  toggleNewLabelForm: PropTypes.func.isRequired,
  newLabelFormOpened: PropTypes.bool.isRequired,
};
Workspace.defaultProps = {
  board: null,
};

export default Workspace;
