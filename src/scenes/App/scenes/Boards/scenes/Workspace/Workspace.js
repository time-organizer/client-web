import React from 'react';
import PropTypes from 'prop-types';

import ContentHeader from '../../../../components/ContentHeader/ContentHeader';
import ContentLayoutFull from '../../../../components/ContentLayoutFull';
import WorkspaceBackground from './components/WorkspaceBackground';

const Workspace = ({ board }) => (
  <ContentLayoutFull>
    {board && (
      <WorkspaceBackground themeId={board.theme}>
        <ContentHeader headerName={board.title} />

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
