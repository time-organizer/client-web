import {
  WidgetTasksNumber,
} from '../index';

const widgetKeys = {
  TASKS_NUMBER: 'tasksNumber',
  TASKS_COMPLETED_NUMBER: 'tasksCompletedNumber',
  TASKS_IN_PROGRESS_NUMBER: 'tasksInProgressNumber',
  TASKS_BACKLOG_NUMBER: 'tasksBacklogNumber',
  TASKS_IGNORED_NUMBER: 'tasksIgnoredNumber',
  TASKS_BLOCKED_NUMBER: 'tasksBlockedNumber',
};

const widgetNames = {
  [widgetKeys.TASKS_NUMBER]: 'All',
  [widgetKeys.TASKS_COMPLETED_NUMBER]: 'Completed',
  [widgetKeys.TASKS_IN_PROGRESS_NUMBER]: 'In progress',
  [widgetKeys.TASKS_BACKLOG_NUMBER]: 'Backlog',
  [widgetKeys.TASKS_BLOCKED_NUMBER]: 'Blocked',
  [widgetKeys.TASKS_IGNORED_NUMBER]: 'Ignored',
};

const defaultActiveWidgets = [
  widgetKeys.TASKS_NUMBER,
  widgetKeys.TASKS_COMPLETED_NUMBER,
  widgetKeys.TASKS_IN_PROGRESS_NUMBER,
  widgetKeys.TASKS_BACKLOG_NUMBER,
  widgetKeys.TASKS_BLOCKED_NUMBER,
  widgetKeys.TASKS_IGNORED_NUMBER,
];

const widgetsList = [
  widgetKeys.TASKS_NUMBER,
  widgetKeys.TASKS_COMPLETED_NUMBER,
  widgetKeys.TASKS_IN_PROGRESS_NUMBER,
  widgetKeys.TASKS_BACKLOG_NUMBER,
  widgetKeys.TASKS_BLOCKED_NUMBER,
  widgetKeys.TASKS_IGNORED_NUMBER,
];

const WidgetsComponents = {
  [widgetKeys.TASKS_NUMBER]: WidgetTasksNumber,
  [widgetKeys.TASKS_COMPLETED_NUMBER]: WidgetTasksNumber,
  [widgetKeys.TASKS_IN_PROGRESS_NUMBER]: WidgetTasksNumber,
  [widgetKeys.TASKS_BLOCKED_NUMBER]: WidgetTasksNumber,
  [widgetKeys.TASKS_BACKLOG_NUMBER]: WidgetTasksNumber,
  [widgetKeys.TASKS_IGNORED_NUMBER]: WidgetTasksNumber,
};

const widgetsPaths = {
  [widgetKeys.TASKS_NUMBER]: '/stats/all-tasks',
  [widgetKeys.TASKS_COMPLETED_NUMBER]: '/stats/completed-tasks',
  [widgetKeys.TASKS_IN_PROGRESS_NUMBER]: '/stats/in-progress-tasks',
  [widgetKeys.TASKS_BLOCKED_NUMBER]: '/stats/blocked-tasks',
  [widgetKeys.TASKS_BACKLOG_NUMBER]: '/stats/backlog-tasks',
  [widgetKeys.TASKS_IGNORED_NUMBER]: '/stats/ignored-tasks',
};

export {
  widgetKeys,
  widgetNames,
  defaultActiveWidgets,
  widgetsList,
  WidgetsComponents,
  widgetsPaths,
};
