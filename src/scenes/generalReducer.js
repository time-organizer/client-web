import * as actions from './generalActions';

const initialState = {
  userSidebarOpened: false,
};

const general = (state = initialState, action) => {
  switch (action.type) {
  case actions.TOGGLE_USER_SIDEBAR:
    return Object.assign({}, state, {
      userSidebarOpened: !state.userSidebarOpened,
    });

  default:
    return state;
  }
};

export default general;
