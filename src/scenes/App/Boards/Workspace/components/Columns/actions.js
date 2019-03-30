import APIService from '../../../../../../services/APIService';

export const ADD_COLUMN_REQUEST = 'ADD_COLUMN_REQUEST';
export const ADD_COLUMN_SUCCESS = 'ADD_COLUMN_SUCCESS';
export const ADD_COLUMN_FAILURE = 'ADD_COLUMN_FAILURE';

export const UPDATE_COLUMNS_ORDER_REQUEST = 'UPDATE_COLUMNS_ORDER_REQUEST';
export const UPDATE_COLUMNS_ORDER_SUCCESS = 'UPDATE_COLUMNS_ORDER_SUCCESS';
export const UPDATE_COLUMNS_ORDER_FAILURE = 'UPDATE_COLUMNS_ORDER_FAILURE';

export const UPDATE_COLUMN_REQUEST = 'UPDATE_COLUMN_REQUEST';
export const UPDATE_COLUMN_SUCCESS = 'UPDATE_COLUMN_SUCCESS';
export const UPDATE_COLUMN_FAILURE = 'UPDATE_COLUMN_FAILURE';

function updateColumnRequest(columnId, newData) {
  return {
    type: UPDATE_COLUMN_REQUEST,
    newData,
    columnId,
  };
}

function updateColumnSuccess(updatedColumn) {
  return {
    type: UPDATE_COLUMN_SUCCESS,
    updatedColumn,
  };
}

function updateColumnFailure(columnId, error) {
  return {
    type: UPDATE_COLUMN_FAILURE,
    serverError: error,
    columnId,
  };
}

export function updateColumn(columnId, newData) {
  return (dispatch) => {
    dispatch(updateColumnRequest(columnId, newData));

    APIService.put(`/api/columns/${columnId}`, {
      updatedObject: {
        ...newData,
      },
    })
      .then((updatedColumn) => {
        dispatch(updateColumnSuccess(updatedColumn.data));
      })
      .catch((error) => {
        dispatch(updateColumnFailure(columnId, error));
      });
  };
}

function updateColumnsOrderRequest(newOrder) {
  return {
    type: UPDATE_COLUMNS_ORDER_REQUEST,
    newOrder,
  };
}

function updateColumnsOrderSuccess() {
  return {
    type: UPDATE_COLUMNS_ORDER_SUCCESS,
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
