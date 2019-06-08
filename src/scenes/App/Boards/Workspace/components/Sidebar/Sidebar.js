import React from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';

import { BoardModel } from '../../../../../../models/Board';
import { Button, buttonTypes } from '../../../../../common_components';

import './Sidebar.css';
import SidebarSection from './components/SidebarSection';
import Header2 from '../../../../../common_components/Texts/Header2';

const Sidebar = ({ board, toggleNewLabelForm }) => {
  const title = get(board, 'title');

  return (
    <div className="sidebar">
      <Header2>{title}</Header2>
      <SidebarSection title="Labels">
        <Button
          onClick={toggleNewLabelForm}
          buttonType={buttonTypes.UNDERLINED}
        >
          Add new label
        </Button>
      </SidebarSection>
    </div>
  );
};

Sidebar.propTypes = {
  board: BoardModel.isRequired,
  toggleNewLabelForm: PropTypes.func.isRequired,
};
Sidebar.defaultProps = {};

export default Sidebar;
