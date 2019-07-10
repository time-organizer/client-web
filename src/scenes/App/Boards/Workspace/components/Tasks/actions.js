import APIService from '../../../../../../services/APIService';

export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE';

function addTaskRequest() {
  return {
    type: ADD_TASK_REQUEST,
  };
}

function addTaskSuccess(createdTask) {
  return {
    type: ADD_TASK_SUCCESS,
    createdTask,
  };
}

function addTaskFailure(error) {
  return {
    type: ADD_TASK_FAILURE,
    error,
  };
}

export function addNewTask(task) {
  return (dispatch) => {
    dispatch(addTaskRequest());

    return APIService.post('/api/tasks', task)
      .then(createdTask => dispatch(addTaskSuccess(createdTask.data)))
      .catch((error) => {
        dispatch(addTaskFailure(error));
      });
  };
}

export const UPDATE_TASK_REQUEST = 'UPDATE_TASK_REQUEST';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_FAILURE = 'UPDATE_TASK_FAILURE';

function updateTaskRequest(taskId) {
  return {
    type: UPDATE_TASK_REQUEST,
    taskId,
  };
}

function updateTaskSuccess(taskId, updatedTask) {
  return {
    type: UPDATE_TASK_SUCCESS,
    taskId,
    updatedTask,
  };
}

function updateTaskFailure(taskId, error) {
  return {
    type: UPDATE_TASK_FAILURE,
    taskId,
    error,
  };
}

export function updateTask(taskId, newData) {
  return (dispatch) => {
    dispatch(updateTaskRequest(taskId));

    return APIService.put(`/api/tasks/${taskId}`, {
      updatedObject: {
        ...newData,
      },
    })
      .then((updatedTask) => {
        dispatch(updateTaskSuccess(taskId, updatedTask.data));
      })
      .catch((error) => {
        dispatch(updateTaskFailure(taskId, error));
      });
  };
}
