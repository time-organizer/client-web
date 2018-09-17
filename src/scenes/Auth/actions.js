import APIService from '../../services/APIService';
import AuthService from '../../services/AuthService';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

function signUpRequest() {
  return {
    type: SIGN_UP_REQUEST,
  };
}

function signUpSuccess() {
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
        AuthService.setToken(token);

        dispatch(signUpSuccess());
      })
      .catch((error) => {
        dispatch(signUpFailure(error.response.data.message));
      });
  };
}
