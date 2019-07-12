import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from '../../../../../common_components';
import { popupTypes } from '../../../../../common_components/Popup/Popup';

const WidgetsChooser = ({ onToggleWidgetsChooser }) => (
  <Popup
    onClose={onToggleWidgetsChooser}
    popupType={popupTypes.medium}
    title="Widgets"
    withCloseButton
  />
);

WidgetsChooser.propTypes = {
  onToggleWidgetsChooser: PropTypes.func.isRequired,
};
WidgetsChooser.defaultProps = {};

export default WidgetsChooser;
