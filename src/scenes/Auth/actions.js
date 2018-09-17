import APIService from '../../services/APIService';
import AuthService from '../../services/AuthService';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function signUpRequest() {
  return {
    type: SIGN_UP_REQUEST,
  };
}

function signUpSuccess(token) {
  AuthService.setToken(token);

  return {
    type: SIGN_UP_SUCCESS,
  };
}

function signUpFailure(errorMessage) {
  return {
    type: SIGN_UP_FAILURE,
    errorMessage,
  };
}

export function signUp(userData) {
  return (dispatch) => {
    dispatch(signUpRequest());

    return APIService.post('/auth/sign-up', userData)
      .then((res) => {
        const { token } = res.data;
        dispatch(signUpSuccess(token));
      })
      .catch((error) => {
        dispatch(signUpFailure(error.response.data.message));
      });
  };
}


function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

function loginSuccess(token) {
  AuthService.setToken(token);

  return {
    type: LOGIN_SUCCESS,
  };
}

function loginFailure(errorMessage) {
  return {
    type: LOGIN_FAILURE,
    errorMessage,
  };
}

export function login(credentials, onSuccess) {
  return (dispatch) => {
    dispatch(loginRequest());

    return APIService.post('/auth/login', credentials)
      .then((res) => {
        const { token } = res.data;
        dispatch(loginSuccess(token));
        onSuccess();
      })
      .catch((error) => {
        dispatch(loginFailure(error.response.data.message));
      });
  };
}
