import * as actions from './actions';

const initialState = {
  user: null,
  isFetching: false,
  signUpErrorMessage: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
  case actions.SIGN_UP_REQUEST:
    return {
      ...state,
      isFetching: true,
      signUpErrorMessage: '',
    };

  case actions.SIGN_UP_SUCCESS:
    return {
      ...state,
      isFetching: false,
    };

  case actions.SIGN_UP_FAILURE:
    return {
      ...state,
      isFetching: false,
      signUpErrorMessage: action.errorMessage,
    };
  default:
    return state;
  }
};

export default auth;
