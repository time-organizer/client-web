import _ from 'lodash';

import APIService from '../../../../services/APIService';

export const USER_LOGOUT = 'USER_LOGOUT';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const UPLOAD_AVATAR_REQUEST = 'UPLOAD_AVATAR_REQUEST';
export const UPLOAD_AVATAR_SUCCESS = 'UPLOAD_AVATAR_SUCCESS';
export const UPLOAD_AVATAR_FAILURE = 'UPLOAD_AVATAR_FAILURE';

function shouldFetchUser(state) {
  const { user: { profile, isFetching, didInvalidate } } = state;

  if (isFetching) {
    return false;
  }

  if (!profile) {
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

function uploadAvatarRequest() {
  return {
    type: UPLOAD_AVATAR_REQUEST,
  };
}

function uploadAvatarSuccess(profile) {
  return {
    type: UPLOAD_AVATAR_SUCCESS,
    profile,
  };
}

function uploadAvatarFailure(errorMessage) {
  return {
    type: UPLOAD_AVATAR_FAILURE,
    errorMessage,
  };
}

export function uploadAvatar(acceptedFiled) {
  return (dispatch) => {
    const data = new FormData(); // eslint-disable-line
    data.append('file', acceptedFiled[0]);

    // const config = { // with progress
    //   onUploadProgress: (progressEvent) => {
    //     const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    //   },
    // };

    dispatch(uploadAvatarRequest());
    APIService.put('/api/avatar', data)
      .then((updatedUser) => {
        dispatch(uploadAvatarSuccess(updatedUser.data));
      })
      .catch((error) => {
        dispatch(uploadAvatarFailure(_.get(error, 'response.data.message', 'Upload error')));
      });
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}
