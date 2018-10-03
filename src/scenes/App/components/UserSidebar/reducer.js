import * as actions from './actions';

const initialState = {
  profile: null,
  isFetching: false,
  didInvalidate: false,
  userServerError: '',
  isUploadingAvatar: false,
  uploadError: '',
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
      userServerError: action.error,
    });

  case actions.UPLOAD_AVATAR_REQUEST: {
    return Object.assign({}, state, {
      isUploadingAvatar: true,
    });
  }

  case actions.UPLOAD_AVATAR_SUCCESS:
    return Object.assign({}, state, {
      didInvalidate: false,
      isUploadingAvatar: false,
      profile: action.profile,
    });

  case actions.UPLOAD_AVATAR_FAILURE:
    return Object.assign({}, state, {
      uploadError: action.errorMessage,
      isUploadingAvatar: false,
    });

  default:
    return state;
  }
};

export default user;
