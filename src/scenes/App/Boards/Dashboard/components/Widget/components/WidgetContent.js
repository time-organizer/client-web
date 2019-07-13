import React from 'react';
import PropTypes from 'prop-types';

const WidgetContent = ({ children }) => (
  <div className="widget-content">
    {children}
  </div>
);

WidgetContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
WidgetContent.defaultProps = {
  children: null,
};

export default WidgetContent;
