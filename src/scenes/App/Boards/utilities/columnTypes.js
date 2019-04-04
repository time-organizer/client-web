const columnTypes = {
  BLOCKED: 'BLOCKED',
  IN_PROGRESS: 'IN_PROGRESS',
  BACKLOG: 'BACKLOG',
  IGNORED: 'IGNORED',
  COMPLETE: 'COMPLETE',
};

const defaultColumnType = {
  value: columnTypes.BACKLOG,
  label: 'Backlogsad asd asd as das dasd asd as dsadasdasdas dasdds adasdas',
};

const columnTypesSelectOptions = [
  {
    value: columnTypes.BLOCKED,
    label: 'Blocked',
  },
  {
    value: columnTypes.IN_PROGRESS,
    label: 'In progress',
  },
  {
    value: columnTypes.BACKLOG,
    label: 'Backlog',
  },
  {
    value: columnTypes.IGNORED,
    label: 'Ignored',
  },
  {
    value: columnTypes.COMPLETE,
    label: 'Complete',
  },
];

export { columnTypes, columnTypesSelectOptions, defaultColumnType };
