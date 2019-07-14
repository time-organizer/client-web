import {
  WidgetAllTasks,
  WidgetCompletedTasks,
} from '../index';

const widgetKeys = {
  TASKS_NUMBER: 'tasksNumber',
  COMPLETED_TASKS: 'completedTasksNumber',
};

const widgetNames = {
  [widgetKeys.TASKS_NUMBER]: 'All tasks',
  [widgetKeys.COMPLETED_TASKS]: 'Tasks completed',
};

const defaultActiveWidgets = [
  widgetKeys.TASKS_NUMBER,
  widgetKeys.COMPLETED_TASKS,
];

const widgetsList = [
  widgetKeys.TASKS_NUMBER,
  widgetKeys.COMPLETED_TASKS,
];

const WidgetsComponents = {
  [widgetKeys.TASKS_NUMBER]: WidgetAllTasks,
  [widgetKeys.COMPLETED_TASKS]: WidgetCompletedTasks,
};

const widgetsPaths = {
  [widgetKeys.TASKS_NUMBER]: '/stats/all-tasks',
  [widgetKeys.COMPLETED_TASKS]: '/stats/completed-tasks',
};

export {
  widgetKeys,
  widgetNames,
  defaultActiveWidgets,
  widgetsList,
  WidgetsComponents,
  widgetsPaths,
};
