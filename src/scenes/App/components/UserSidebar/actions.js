import _ from 'lodash';

import APIService from '../../../../services/APIService';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

function shouldFetchUser(state) {
  const { user: { profile, isFetching, didInvalidate } } = state;

  if (!profile && !isFetching) {
    return true;
  }

  return didInvalidate;
}

function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUEST,
  };
}

function fetchUserSuccess(profile) {
  return {
    type: FETCH_USER_SUCCESS,
    profile,
  };
}

function fetchUserFailure(error) {
  return {
    type: FETCH_USER_FAILURE,
    error,
  };
}

export function fetchUserIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchUser(getState())) {
      dispatch(fetchUserRequest());

      APIService.get('/auth/me')
        .then((profile) => {
          dispatch(fetchUserSuccess(_.get(profile, 'data', null)));
        })
        .catch((error) => {
          dispatch(fetchUserFailure(_.get(error, 'response.data.message', '')));
        });
    }
  };
}
