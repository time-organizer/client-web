import * as actions from './actions';

export const initialState = {
  isFetching: false,
  didInvalidate: false,
  serverError: '',
  labelsById: {},
};

const labels = (state = initialState, action) => {
  switch (action.type) {
  case actions.FETCH_LABELS_REQUEST:
    return Object.assign({}, state, {
      ...state,
      isFetching: true,
    });

  case actions.FETCH_LABELS_SUCCESS:
    return Object.assign({}, state, {
      ...state,
      isFetching: false,
      didInvalidate: false,
      labelsById: {},
      serverError: '',
    });

  case actions.FETCH_LABELS_FAILURE:
    return Object.assign({}, state, {
      ...state,
      isFetching: false,
      serverError: action.error,
    });

  default:
    return state;
  }
};

export default labels;
