import React from 'react';
import { Icon, iconNames } from '../../../../../../common_components';

const WidgetError = () => (
  <div className="widget-error-wrapper">
    <div className="widget-error">
      <div>
        <Icon name={iconNames.error} />
      </div>
      <div>
        Something went wrong
      </div>
    </div>
  </div>
);

WidgetError.propTypes = {};
WidgetError.defaultProps = {};

export default WidgetError;
