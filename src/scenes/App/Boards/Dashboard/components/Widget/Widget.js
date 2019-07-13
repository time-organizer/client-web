import React from 'react';
import PropTypes from 'prop-types';

import './Widget.css';
import WidgetHeader from './components/WidgetHeader';
import WidgetContent from './components/WidgetContent';
import WidgetEditionOverlay from './components/WidgetEditionOverlay';

const Widget = ({ children, editMode, name }) => (
  <div className="widget">
    {editMode && (
      <WidgetEditionOverlay />
    )}
    <WidgetHeader name={name} />
    <WidgetContent>
      {children}
    </WidgetContent>
  </div>
);

Widget.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  name: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
};
Widget.defaultProps = {
  children: null,
};

export default Widget;
