import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import APIService from '../../../../../../services/APIService';

export const FETCH_LABELS_REQUEST = 'FETCH_LABELS_REQUEST';
export const FETCH_LABELS_SUCCESS = 'FETCH_LABELS_SUCCESS';
export const FETCH_LABELS_FAILURE = 'FETCH_LABELS_FAILURE';

function shouldFetchLabels(state) {
  const { boards: { workspace: { labels: { labelsById, isFetching, didInvalidate } } } } = state;

  if (isFetching) {
    return false;
  }

  if (!labelsById) {
    return true;
  }

  if (isEmpty(labelsById)) {
    return true;
  }

  return didInvalidate;
}

function fetchLabelsRequest() {
  return {
    type: FETCH_LABELS_REQUEST,
  };
}

function fetchLabelsSuccess(labels) {
  return {
    type: FETCH_LABELS_SUCCESS,
    labels,
  };
}

function fetchLabelsFailure(error) {
  return {
    type: FETCH_LABELS_FAILURE,
    error,
  };
}

export function fetchLabelsIfNeeded(boardId) {
  return (dispatch, getState) => {
    if (shouldFetchLabels(getState())) {
      dispatch(fetchLabelsRequest());

      APIService.get(`/api/labels/${boardId}`)
        .then((res) => {
          dispatch(fetchLabelsSuccess(res.data));
        })
        .catch((error) => {
          dispatch(fetchLabelsFailure(get(error, 'response.data.message', '')));
        });
    }
  };
}
