import * as actions from './actions';

const initialState = {
  user: null,
  isFetching: false,
  signUpErrorMessage: '',
  loginErrorMessage: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
  case actions.SIGN_UP_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
      signUpErrorMessage: '',
    });

  case actions.SIGN_UP_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      signUpErrorMessage: '',
    });

  case actions.SIGN_UP_FAILURE:
    return Object.assign({}, state, {
      isFetching: false,
      signUpErrorMessage: action.errorMessage,
    });

  case actions.LOGIN_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
      loginErrorMessage: '',
    });

  case actions.LOGIN_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      loginErrorMessage: '',
    });

  case actions.LOGIN_FAILURE:
    return Object.assign({}, state, {
      isFetching: false,
      loginErrorMessage: action.errorMessage,
    });
  default:
    return state;
  }
};

export default auth;
