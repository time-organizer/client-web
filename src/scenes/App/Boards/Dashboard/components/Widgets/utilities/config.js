import {
  WidgetAllTasks,
  WidgetCompletedTasks,
} from '../index';

const widgetKeys = {
  TASKS_NUMBER: 'tasksNumber',
  COMPLETED_TASKS: 'completedtaslsNumber',
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

const WidgetComponents = {
  [widgetKeys.TASKS_NUMBER]: WidgetAllTasks,
  [widgetKeys.COMPLETED_TASKS]: WidgetCompletedTasks,
};

export {
  widgetKeys,
  widgetNames,
  defaultActiveWidgets,
  widgetsList,
  WidgetComponents,
};
