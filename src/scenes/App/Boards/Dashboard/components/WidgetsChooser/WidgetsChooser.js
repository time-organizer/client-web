import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from '../../../../../common_components';
import { popupTypes } from '../../../../../common_components/Popup/Popup';
import { widgetsList } from '../Widgets/utilities/config';
import WidgetsChooserListItem from './WidgetsChooserListItem';

import './WidgetsChooser.css';

const WidgetsChooser = ({ onToggleWidgetsChooser, activeWidgets, toggleWidget }) => (
  <Popup
    onClose={onToggleWidgetsChooser}
    popupType={popupTypes.medium}
    title="Widgets"
    withCloseButton
  >
    {widgetsList.map(widgetKey => (
      <WidgetsChooserListItem
        key={widgetKey}
        onClick={() => toggleWidget(widgetKey)}
        name={widgetKey}
        active={activeWidgets.indexOf(widgetKey) > -1}
      />
    ))}
  </Popup>
);

WidgetsChooser.propTypes = {
  onToggleWidgetsChooser: PropTypes.func.isRequired,
  activeWidgets: PropTypes.arrayOf(PropTypes.string),
  toggleWidget: PropTypes.func.isRequired,
};
WidgetsChooser.defaultProps = {
  activeWidgets: [],
};

export default WidgetsChooser;
