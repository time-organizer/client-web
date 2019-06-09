import * as actions from './actions';
import arrayToCollectionById from '../../../../../../utilities/arrayToCollectionById';

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
      labelsById: arrayToCollectionById(action.labels),
      serverError: '',
    });

  case actions.FETCH_LABELS_FAILURE:
    return Object.assign({}, state, {
      ...state,
      isFetching: false,
      serverError: action.error,
    });

  case actions.ADD_NEW_LABEL_SUCCESS:
    return Object.assign({}, state, {
      didInvalidate: true,
    });

  default:
    return state;
  }
};

export default labels;
