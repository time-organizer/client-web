import APIService from '../../../../../../services/APIService';

export const ADD_COLUMN_REQUEST = 'ADD_COLUMN_REQUEST';
export const ADD_COLUMN_SUCCESS = 'ADD_COLUMN_SUCCESS';
export const ADD_COLUMN_FAILURE = 'ADD_COLUMN_FAILURE';


function addColumnRequest() {
  return {
    type: ADD_COLUMN_REQUEST,
  };
}

function addColumnSuccess(updatedBoard) {
  return {
    type: ADD_COLUMN_SUCCESS,
    updatedBoard,
  };
}

function addColumnFailure(error) {
  return {
    type: ADD_COLUMN_FAILURE,
    error,
  };
}

export function addNewColumn(column) {
  return (dispatch) => {
    dispatch(addColumnRequest());

    return APIService.post('/api/columns', column)
      .then(updatedBoard => dispatch(addColumnSuccess(updatedBoard.data)))
      .catch((error) => {
        dispatch(addColumnFailure(error));
      });
  };
}
