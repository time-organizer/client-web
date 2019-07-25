import React from 'react';
import PropTypes from 'prop-types';
import Header4 from '../../../../../../common_components/Texts/Header4';

const WidgetHeader = ({ name }) => (
  <div className="widget-header">
    <Header4 className="widget-name">
      {name}
    </Header4>
  </div>
);

WidgetHeader.propTypes = {
  name: PropTypes.string.isRequired,
};
WidgetHeader.defaultProps = {};

export default WidgetHeader;
