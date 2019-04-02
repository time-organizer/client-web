export default function updatedColumns(oldColumnStates, reorder) {
  const {
    columnDestinationId,
    columnSourceId,
    taskId,
    newIndex,
  } = reorder;

  const sourceColumn = oldColumnStates[columnSourceId];
  const destinationColumn = oldColumnStates[columnDestinationId];

  if (columnSourceId === columnDestinationId) {
    const tasksOrder = Array.from(sourceColumn.tasksOrder);
    tasksOrder.splice(tasksOrder.indexOf(taskId), 1);
    tasksOrder.splice(newIndex, 0, taskId);

    return {
      [columnSourceId]: {
        ...sourceColumn,
        tasksOrder,
      },
    };
  }

  const sourceTaskOrder = Array.from(sourceColumn.tasksOrder);
  sourceTaskOrder.splice(sourceTaskOrder.indexOf(taskId), 1);

  const destinationTaskOrder = Array.from(destinationColumn.tasksOrder);
  destinationTaskOrder.splice(newIndex, 0, taskId);

  return {
    [columnSourceId]: {
      ...sourceColumn,
      tasksOrder: sourceTaskOrder,
    },
    [columnDestinationId]: {
      ...destinationColumn,
      tasksOrder: destinationTaskOrder,
    },
  };
}
