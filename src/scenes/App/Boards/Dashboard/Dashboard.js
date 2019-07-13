import React from 'react';
import PropTypes from 'prop-types';

import ContentLayoutFull from '../../components/ContentLayoutFull';

import './Dashboard.css';
import WidgetsChooser from './components/WidgetsChooser';
import Grid from './components/Grid';
import DashboardButtons from './components/DashboardButtons';

const Dashboard = ({
  onToggleWidgetsChooser, widgetsChooserOpened, toggleEditMode, editMode, layoutsConfig,
  editLayoutsConfig,
}) => (
  <ContentLayoutFull>
    <DashboardButtons
      onToggleWidgetsChooser={onToggleWidgetsChooser}
      toggleEditMode={toggleEditMode}
      editMode={editMode}
    />
    {widgetsChooserOpened && (
      <WidgetsChooser onToggleWidgetsChooser={onToggleWidgetsChooser} />
    )}
    <Grid
      editMode={editMode}
      layoutsConfig={layoutsConfig}
      editLayoutsConfig={editLayoutsConfig}
    />
  </ContentLayoutFull>
);

Dashboard.propTypes = {
  onToggleWidgetsChooser: PropTypes.func.isRequired,
  widgetsChooserOpened: PropTypes.bool.isRequired,
  toggleEditMode: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
  layoutsConfig: PropTypes.shape().isRequired,
  editLayoutsConfig: PropTypes.func.isRequired,
};
Dashboard.defaultProps = {};

export default Dashboard;
