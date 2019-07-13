const setActiveWidgets = (activeWidgets) => {
  localStorage.setItem('dashboardActiveWidgets', JSON.stringify(activeWidgets)); // eslint-disable-line
};

export default setActiveWidgets;
