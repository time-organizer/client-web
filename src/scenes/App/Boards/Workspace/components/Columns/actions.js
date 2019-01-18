import APIService from '../../../../../../services/APIService';

export const ADD_COLUMN_REQUEST = 'ADD_COLUMN_REQUEST';
export const ADD_COLUMN_SUCCESS = 'ADD_COLUMN_SUCCESS';
export const ADD_COLUMN_FAILURE = 'ADD_COLUMN_FAILURE';

export const UPDATE_COLUMNS_ORDER_REQUEST = 'UPDATE_COLUMNS_ORDER_REQUEST';
export const UPDATE_COLUMNS_ORDER_SUCCESS = 'UPDATE_COLUMNS_ORDER_SUCCESS';
export const UPDATE_COLUMNS_ORDER_FAILURE = 'UPDATE_COLUMNS_ORDER_FAILURE';

function updateColumnsOrderRequest(newOrder) {
  return {
    type: UPDATE_COLUMNS_ORDER_REQUEST,
    newOrder,
  };
}

function updateColumnsOrderSuccess(updatedBoard) {
  return {
    type: UPDATE_COLUMNS_ORDER_SUCCESS,
    board: updatedBoard,
  };
}

function updateColumnsOrderFailure(error) {
  return {
    type: UPDATE_COLUMNS_ORDER_FAILURE,
    serverError: error,
  };
}

export function updateColumnOrder(boardId, newOrder) {
  return (dispatch) => {
    dispatch(updateColumnsOrderRequest(newOrder));

    APIService.put(`/api/boards/${boardId}`, {
      updatedObject: {
        columnsOrder: newOrder,
      },
      confirmOnly: true,
    })
      .then((updatedBoard) => {
        dispatch(updateColumnsOrderSuccess(updatedBoard.data));
      })
      .catch((error) => {
        dispatch(updateColumnsOrderFailure(error));
      });
  };
}

function addColumnRequest() {
  return {
    type: ADD_COLUMN_REQUEST,
  };
}

function addColumnSuccess(updatedColumn) {
  return {
    type: ADD_COLUMN_SUCCESS,
    updatedColumn,
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
      .then(updatedColumn => dispatch(addColumnSuccess(updatedColumn.data)))
      .catch((error) => {
        dispatch(addColumnFailure(error));
      });
  };
}
