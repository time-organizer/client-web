import {
  WidgetAllTasks,
  WidgetCompletedTasks,
  WidgetInProgressTasks,
} from '../index';

const widgetKeys = {
  TASKS_NUMBER: 'tasksNumber',
  TASKS_COMPLETED_NUMBER: 'tasksCompletedNumber',
  TASKS_IN_PROGRESS_NUMBER: 'tasksInProgressNumber',
};

const widgetNames = {
  [widgetKeys.TASKS_NUMBER]: 'All',
  [widgetKeys.TASKS_COMPLETED_NUMBER]: 'Completed',
  [widgetKeys.TASKS_IN_PROGRESS_NUMBER]: 'In progress',
};

const defaultActiveWidgets = [
  widgetKeys.TASKS_NUMBER,
  widgetKeys.TASKS_COMPLETED_NUMBER,
  widgetKeys.TASKS_IN_PROGRESS_NUMBER,
];

const widgetsList = [
  widgetKeys.TASKS_NUMBER,
  widgetKeys.TASKS_COMPLETED_NUMBER,
  widgetKeys.TASKS_IN_PROGRESS_NUMBER,
];

const WidgetsComponents = {
  [widgetKeys.TASKS_NUMBER]: WidgetAllTasks,
  [widgetKeys.TASKS_COMPLETED_NUMBER]: WidgetCompletedTasks,
  [widgetKeys.TASKS_IN_PROGRESS_NUMBER]: WidgetInProgressTasks,
};

const widgetsPaths = {
  [widgetKeys.TASKS_NUMBER]: '/stats/all-tasks',
  [widgetKeys.TASKS_COMPLETED_NUMBER]: '/stats/completed-tasks',
  [widgetKeys.TASKS_IN_PROGRESS_NUMBER]: '/stats/in-progress-tasks',
};

export {
  widgetKeys,
  widgetNames,
  defaultActiveWidgets,
  widgetsList,
  WidgetsComponents,
  widgetsPaths,
};
