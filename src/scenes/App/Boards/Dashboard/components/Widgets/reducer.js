import * as actions from './actions';
import { widgetsList } from './utilities/config';

const initialState = {
  ...widgetsList.reduce((prev, widgetKey) => ({
    ...prev,
    [widgetKey]: {
      isFetching: false,
      data: null,
      error: null,
      didInvalidate: false,
    },
  }), {}),
};

const widgets = (state = initialState, action) => {
  switch (action.type) {
  case actions.FETCH_WIDGET_DATA_REQUEST: {
    return Object.assign({}, state, {
      [action.widgetKey]: {
        ...state[action.widgetKey],
        isFetching: true,
        error: null,
      },
    });
  }

  case actions.FETCH_WIDGET_DATA_SUCCESS: {
    return Object.assign({}, state, {
      [action.widgetKey]: {
        ...state[action.widgetKey],
        isFetching: false,
        data: action.data,
        error: null,
        didInvalidate: false,
      },
    });
  }

  case actions.FETCH_WIDGET_DATA_FAILURE: {
    return Object.assign({}, state, {
      [action.widgetKey]: {
        ...state[action.widgetKey],
        isFetching: false,
        error: action.error,
      },
    });
  }

  default:
    return state;
  }
};

export default widgets;
