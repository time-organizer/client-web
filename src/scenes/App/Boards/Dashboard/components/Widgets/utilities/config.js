import {
  WidgetTasksNumber,
  WidgetTasksTypesChart,
} from '../index';

const widgetKeys = {
  TASKS_NUMBER: 'tasksNumber',
  TASKS_COMPLETED_NUMBER: 'tasksCompletedNumber',
  TASKS_IN_PROGRESS_NUMBER: 'tasksInProgressNumber',
  TASKS_BACKLOG_NUMBER: 'tasksBacklogNumber',
  TASKS_IGNORED_NUMBER: 'tasksIgnoredNumber',
  TASKS_BLOCKED_NUMBER: 'tasksBlockedNumber',
  TASKS_TYPES_CHART: 'tasksTypesChart',
};

const widgetNames = {
  [widgetKeys.TASKS_NUMBER]: 'All',
  [widgetKeys.TASKS_COMPLETED_NUMBER]: 'Completed',
  [widgetKeys.TASKS_IN_PROGRESS_NUMBER]: 'In progress',
  [widgetKeys.TASKS_BACKLOG_NUMBER]: 'Backlog',
  [widgetKeys.TASKS_BLOCKED_NUMBER]: 'Blocked',
  [widgetKeys.TASKS_IGNORED_NUMBER]: 'Ignored',
  [widgetKeys.TASKS_TYPES_CHART]: 'Tasks overview',
};

const defaultActiveWidgets = [
  widgetKeys.TASKS_NUMBER,
  widgetKeys.TASKS_COMPLETED_NUMBER,
  widgetKeys.TASKS_IN_PROGRESS_NUMBER,
  widgetKeys.TASKS_BACKLOG_NUMBER,
  widgetKeys.TASKS_BLOCKED_NUMBER,
  widgetKeys.TASKS_IGNORED_NUMBER,
  widgetKeys.TASKS_TYPES_CHART,
];

const widgetsList = [
  widgetKeys.TASKS_NUMBER,
  widgetKeys.TASKS_COMPLETED_NUMBER,
  widgetKeys.TASKS_IN_PROGRESS_NUMBER,
  widgetKeys.TASKS_BACKLOG_NUMBER,
  widgetKeys.TASKS_BLOCKED_NUMBER,
  widgetKeys.TASKS_IGNORED_NUMBER,
  widgetKeys.TASKS_TYPES_CHART,
];

const WidgetsComponents = {
  [widgetKeys.TASKS_NUMBER]: WidgetTasksNumber,
  [widgetKeys.TASKS_COMPLETED_NUMBER]: WidgetTasksNumber,
  [widgetKeys.TASKS_IN_PROGRESS_NUMBER]: WidgetTasksNumber,
  [widgetKeys.TASKS_BLOCKED_NUMBER]: WidgetTasksNumber,
  [widgetKeys.TASKS_BACKLOG_NUMBER]: WidgetTasksNumber,
  [widgetKeys.TASKS_IGNORED_NUMBER]: WidgetTasksNumber,
  [widgetKeys.TASKS_TYPES_CHART]: WidgetTasksTypesChart,
};

const widgetsPaths = {
  [widgetKeys.TASKS_NUMBER]: '/stats/all-tasks',
  [widgetKeys.TASKS_COMPLETED_NUMBER]: '/stats/completed-tasks',
  [widgetKeys.TASKS_IN_PROGRESS_NUMBER]: '/stats/in-progress-tasks',
  [widgetKeys.TASKS_BLOCKED_NUMBER]: '/stats/blocked-tasks',
  [widgetKeys.TASKS_BACKLOG_NUMBER]: '/stats/backlog-tasks',
  [widgetKeys.TASKS_IGNORED_NUMBER]: '/stats/ignored-tasks',
  [widgetKeys.TASKS_TYPES_CHART]: '/stats/tasks-types-chart',
};

export {
  widgetKeys,
  widgetNames,
  defaultActiveWidgets,
  widgetsList,
  WidgetsComponents,
  widgetsPaths,
};
