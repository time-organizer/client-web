import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
} from 'recharts';

import colors from '../../../../../../../utilities/colors';

const WidgetTasksTypesChart = ({ data }) => (
  <ResponsiveContainer
    width="100%"
    height="100%"
  >
    <BarChart
      data={data.chartData}
      margin={{
        top: 24,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip cursor={false} />
      {data.dataInfo.map(dataInfoEntry => (
        <Bar
          key={dataInfoEntry.key}
          dataKey={dataInfoEntry.key}
          fill={dataInfoEntry.color ? dataInfoEntry.color : colors.accentColor}
          barSize={30}
          opacity={0.6}
        />
      ))}
    </BarChart>
  </ResponsiveContainer>
);

WidgetTasksTypesChart.propTypes = {
  data: PropTypes.shape({
    dataInfo: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      color: PropTypes.string,
    })),
    chartData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};
WidgetTasksTypesChart.defaultProps = {};

export default WidgetTasksTypesChart;
