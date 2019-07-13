const setDashboardLayouts = (newLayouts) => {
  localStorage.setItem('dashboardLayoutsConfig', JSON.stringify(newLayouts)); // eslint-disable-line
};

export default setDashboardLayouts;
