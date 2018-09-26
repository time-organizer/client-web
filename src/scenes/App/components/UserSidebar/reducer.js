import * as actions from './actions';

const initialState = {
  profile: null,
  isFetching: false,
  didInvalidate: false,
  fetchUserServerError: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case actions.FETCH_USER_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
    });

  case actions.FETCH_USER_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      profile: action.profile,
    });

  case actions.FETCH_USER_FAILURE:
    return Object.assign({}, state, {
      isFetching: false,
      fetchUserServerError: action.error,
    });

  default:
    return state;
  }
};

export default user;
