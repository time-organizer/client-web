import React from 'react';
import PropTypes from 'prop-types';

import ContentLayoutFull from '../../components/ContentLayoutFull';

import './Dashboard.css';
import WidgetsChooser from './components/WidgetsChooser';
import Grid from './components/Grid';
import DashboardButtons from './components/DashboardButtons';

const Dashboard = ({
  onToggleWidgetsChooser, widgetsChoosedOpened, toggleEditMode, editMode,
}) => (
  <ContentLayoutFull>
    <DashboardButtons
      onToggleWidgetsChooser={onToggleWidgetsChooser}
      toggleEditMode={toggleEditMode}
      editMode={editMode}
    />
    {widgetsChoosedOpened && (
      <WidgetsChooser onToggleWidgetsChooser={onToggleWidgetsChooser} />
    )}
    <Grid editMode={editMode} />
  </ContentLayoutFull>
);

Dashboard.propTypes = {
  onToggleWidgetsChooser: PropTypes.func.isRequired,
  widgetsChoosedOpened: PropTypes.bool.isRequired,
  toggleEditMode: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
};
Dashboard.defaultProps = {};

export default Dashboard;
