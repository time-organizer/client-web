import APIService from '../../../../../../services/APIService';

export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE';

function addTaskRequest() {
  return {
    type: ADD_TASK_REQUEST,
  };
}

function addTaskSuccess(updatedBoard) {
  return {
    type: ADD_TASK_SUCCESS,
    updatedBoard,
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
