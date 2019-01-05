import React from 'react';
import PropTypes from 'prop-types';

import ContentHeader from '../../components/ContentHeader/ContentHeader';
import ContentLayoutFull from '../../components/ContentLayoutFull';
import WorkspaceBackground from './components/WorkspaceBackground';
import ColumnsDragDrop from './components/Columns/ColumnsDragDrop';

import './Workspace.css';

const Workspace = ({ board }) => (
  <ContentLayoutFull>
    {board.data && (
      <WorkspaceBackground themeId={board.data.theme}>
        <ContentHeader headerName={board.data.title} />
        <div className="columns-wrapper">
          <ColumnsDragDrop />
        </div>
      </WorkspaceBackground>
    )}
  </ContentLayoutFull>
);

Workspace.propTypes = {
  board: PropTypes.shape(),
};
Workspace.defaultProps = {
  board: null,
};

export default Workspace;
