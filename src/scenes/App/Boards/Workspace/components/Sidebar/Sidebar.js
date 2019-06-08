import React from 'react';
import get from 'lodash/get';

import { BoardModel } from '../../../../../../models/Board';

import './Sidebar.css';
import SidebarSection from './components/SidebarSection';
import Header2 from '../../../../../common_components/Texts/Header2';
import LabelsList from '../Labels/LabelsList';

const Sidebar = ({ board }) => {
  const title = get(board, 'title');

  return (
    <div className="sidebar">
      <Header2>{title}</Header2>
      <SidebarSection title="Labels">
        <LabelsList withNewButton />
      </SidebarSection>
    </div>
  );
};

Sidebar.propTypes = {
  board: BoardModel.isRequired,
};
Sidebar.defaultProps = {};

export default Sidebar;
