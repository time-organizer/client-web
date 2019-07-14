import React from 'react';
import PropTypes from 'prop-types';

import Header3 from '../../../../../../../common_components/Texts/Header3';

import './SimpleWidget.css';

const SimpleWidget = ({ title, value }) => (
  <div className="simple-widget">
    <div className="simple-widget-content">
      <div className="simple-widget-value">{value}</div>
      <Header3 className="simple-widget-title">{title}</Header3>
    </div>
  </div>
);

SimpleWidget.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
SimpleWidget.defaultProps = {};

export default SimpleWidget;
