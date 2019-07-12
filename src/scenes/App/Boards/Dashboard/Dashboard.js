import React from 'react';
import PropTypes from 'prop-types';

import { Button, buttonTypes } from '../../../common_components';
import ContentLayoutFull from '../../components/ContentLayoutFull';

import './Dashboard.css';
import WidgetsChooser from './components/WidgetsChooser';

const Dashboard = ({ onToggleWidgetsChooser, widgetsChoosedOpened }) => (
  <ContentLayoutFull>
    <Button
      className="dashboard-widgets-button"
      onClick={onToggleWidgetsChooser}
      buttonType={buttonTypes.NEUTRAL}
    >
      Widgets
    </Button>
    {widgetsChoosedOpened && (
      <WidgetsChooser onToggleWidgetsChooser={onToggleWidgetsChooser} />
    )}
  </ContentLayoutFull>
);

Dashboard.propTypes = {
  onToggleWidgetsChooser: PropTypes.func.isRequired,
  widgetsChoosedOpened: PropTypes.bool.isRequired,
};
Dashboard.defaultProps = {};

export default Dashboard;
