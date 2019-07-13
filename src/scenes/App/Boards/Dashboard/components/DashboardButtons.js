import React from 'react';
import PropTypes from 'prop-types';
import { buttonTypes } from '../../../../common_components/Button';
import { Button, Icon, iconNames } from '../../../../common_components';

const DashboardButtons = ({ onToggleWidgetsChooser, toggleEditMode }) => (
  <div className="dashboard-widgets-buttons">
    <Button
      className="margin-right-8"
      onClick={toggleEditMode}
      buttonType={buttonTypes.NEUTRAL}
    >
      <Icon name={iconNames.edit} />
    </Button>
    <Button
      onClick={onToggleWidgetsChooser}
      buttonType={buttonTypes.NEUTRAL}
    >
      Widgets
    </Button>
  </div>
);

DashboardButtons.propTypes = {
  onToggleWidgetsChooser: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
};
DashboardButtons.defaultProps = {};

export default DashboardButtons;
