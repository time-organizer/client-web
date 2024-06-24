import React from 'react';
import get from 'lodash/get';

import { BoardModel } from '../../../../../../models/Board';

import './Sidebar.css';
import SidebarSection from './components/SidebarSection';
import LabelsList from '../Labels/LabelsList';
import ParticipantsList from './components/ParticipantsList';
import Header3 from '../../../../../common_components/Texts/Header3';

const Sidebar = ({ board }) => {
  const title = get(board, 'title');
  const participants = get(board, 'participants', []);

  return (
    <div className="sidebar-scroll">
      <div className="sidebar">
        <Header3>{title}</Header3>
        <SidebarSection title="Labels">
          <LabelsList
            withNewButton
            onLabelClick={() => {}}
            isLabelActive={() => false}
          />
        </SidebarSection>
        <SidebarSection title="Participants">
          <ParticipantsList participants={participants} />
        </SidebarSection>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  board: BoardModel.isRequired,
};
Sidebar.defaultProps = {};

export default Sidebar;
