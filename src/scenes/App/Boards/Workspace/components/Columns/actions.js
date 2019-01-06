import APIService from '../../../../../../services/APIService';

export const ADD_COLUMN_REQUEST = 'ADD_COLUMN_REQUEST';
export const ADD_COLUMN_SUCCESS = 'ADD_COLUMN_SUCCESS';
export const ADD_COLUMN_FAILURE = 'ADD_COLUMN_FAILURE';

// export const UPDATE_COLUMNS_ORDER_REQUEST = 'UPDATE_COLUMNS_ORDER_REQUEST';
// export const UPDATE_COLUMNS_ORDER_SUCCESS = 'UPDATE_COLUMNS_ORDER_SUCCESS';
// export const UPDATE_COLUMNS_ORDER_FAILURE = 'UPDATE_COLUMNS_ORDER_FAILURE';
//
// function updateColumnsOrderRequest() {
//   return {
//     type: UPDATE_COLUMNS_ORDER_REQUEST,
//   };
// }
//
// function updateColumnsOrderSuccess() {
//   return {
//     type: UPDATE_COLUMNS_ORDER_SUCCESS,
//   };
// }
//
// function updateColumnsOrderFailure(error) {
//   return {
//     type: UPDATE_COLUMNS_ORDER_FAILURE,
//     serverError: error,
//   };
// }
//
// function updateColumnOrder() {
//   return (dispatch) => {
//     dispatch(updateColumnsOrderRequest());
//   };
// }

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
