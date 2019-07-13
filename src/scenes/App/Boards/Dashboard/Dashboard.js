import React from 'react';
import PropTypes from 'prop-types';

import ContentLayoutFull from '../../components/ContentLayoutFull';

import './Dashboard.css';
import WidgetsChooser from './components/WidgetsChooser';
import Grid from './components/Grid';
import DashboardButtons from './components/DashboardButtons';

const Dashboard = ({
  onToggleWidgetsChooser, widgetsChooserOpened, toggleEditMode, editMode, layoutsConfig,
  editLayoutsConfig, toggleWidget, activeWidgets,
}) => (
  <ContentLayoutFull>
    <DashboardButtons
      onToggleWidgetsChooser={onToggleWidgetsChooser}
      toggleEditMode={toggleEditMode}
      editMode={editMode}
    />
    {widgetsChooserOpened && (
      <WidgetsChooser
        activeWidgets={activeWidgets}
        toggleWidget={toggleWidget}
        onToggleWidgetsChooser={onToggleWidgetsChooser}
      />
    )}
    <Grid
      editMode={editMode}
      layoutsConfig={layoutsConfig}
      editLayoutsConfig={editLayoutsConfig}
      activeWidgets={activeWidgets}
    />
  </ContentLayoutFull>
);

Dashboard.propTypes = {
  onToggleWidgetsChooser: PropTypes.func.isRequired,
  widgetsChooserOpened: PropTypes.bool.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
  layoutsConfig: PropTypes.shape().isRequired,
  editLayoutsConfig: PropTypes.func.isRequired,
  toggleWidget: PropTypes.func.isRequired,
  activeWidgets: PropTypes.arrayOf(PropTypes.string),
};
Dashboard.defaultProps = {
  activeWidgets: [],
};

export default Dashboard;
