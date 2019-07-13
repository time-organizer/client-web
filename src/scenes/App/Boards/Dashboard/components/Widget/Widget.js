import React from 'react';
import PropTypes from 'prop-types';

import './Widget.css';
import WidgetHeader from './components/WidgetHeader';

const Widget = ({ children, name }) => (
  <div className="widget">
    <WidgetHeader name={name} />
    {children}
  </div>
);

Widget.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  name: PropTypes.string.isRequired,
};
Widget.defaultProps = {};

export default Widget;
