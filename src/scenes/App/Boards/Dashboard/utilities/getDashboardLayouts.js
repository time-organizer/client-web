import { defaultDashboardLayouts } from './config';

const getDashboardLayouts = () => {
  const layoutsConfig = localStorage.getItem('dashboardLayoutsConfig'); // eslint-disable-line
  return layoutsConfig
    ? JSON.parse(layoutsConfig)
    : defaultDashboardLayouts;
};

export default getDashboardLayouts;
