import React from 'react';
import PropTypes from 'prop-types';

import ContentHeader from '../../../../components/ContentHeader/ContentHeader';
import ContentLayoutFull from '../../../../components/ContentLayoutFull';
import WorkspaceBackground from './components/WorkspaceBackground';
import NewColumnForm from './components/NewColumnForm';
import ColumnWrapper from './components/ColumnWrapper';

import './Workspace.css';

const Workspace = ({ board }) => (
  <ContentLayoutFull>
    {board && (
      <WorkspaceBackground themeId={board.theme}>
        <ContentHeader headerName={board.title} />
        <div className="columns-wrapper">
          <NewColumnForm />
          <ColumnWrapper />
          <ColumnWrapper />
          <ColumnWrapper />
          <ColumnWrapper />
          <ColumnWrapper />
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
