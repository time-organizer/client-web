import React from 'react';
import get from 'lodash/get';

import { BoardModel } from '../../../../../../models/Board';

import './Sidebar.css';
import SidebarSection from './components/SidebarSection';
import Header2 from '../../../../../common_components/Texts/Header2';
import LabelsList from '../Labels/LabelsList';
import ParticipantsList from './components/ParticipantsList';

const Sidebar = ({ board }) => {
  const title = get(board, 'title');
  const participants = get(board, 'participants', []);

  return (
    <div className="sidebar">
      <Header2>{title}</Header2>
      <div className="sidebar-scroll">
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
