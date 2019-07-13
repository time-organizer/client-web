import { defaultActiveWidgets } from '../components/Widgets/utilities/config';

const getActiveWidgets = () => {
  const activeWidgets = localStorage.getItem('dashboardActiveWidgets'); // eslint-disable-line

  return activeWidgets
    ? JSON.parse(activeWidgets)
    : defaultActiveWidgets;
};

export default getActiveWidgets;
