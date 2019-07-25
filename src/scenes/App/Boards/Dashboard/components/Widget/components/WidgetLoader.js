import React from 'react';
import { Loader } from '../../../../../../common_components';

const WidgetLoader = () => (
  <div className="widget-loader">
    <Loader text="Loading" small />
  </div>
);

WidgetLoader.propTypes = {};
WidgetLoader.defaultProps = {};

export default WidgetLoader;
