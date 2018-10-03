import * as actions from './actions';

const initialState = {
  isFetching: false,
  signUpServerError: '',
  loginServerError: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
  case actions.SIGN_UP_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
      signUpServerError: '',
    });

  case actions.SIGN_UP_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      signUpServerError: '',
    });

  case actions.SIGN_UP_FAILURE:
    return Object.assign({}, state, {
      isFetching: false,
      signUpServerError: action.errorMessage,
    });

  case actions.LOGIN_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
      loginServerError: '',
    });

  case actions.LOGIN_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      loginServerError: '',
    });

  case actions.LOGIN_FAILURE:
    return Object.assign({}, state, {
      isFetching: false,
      loginServerError: action.errorMessage,
    });
  default:
    return state;
  }
};

export default auth;
