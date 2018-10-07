import * as actions from './generalActions';

export const initialState = {
  userSidebarOpened: false,
  forms: {
    newBoardFormOpened: false,
  },
};

const general = (state = initialState, action) => {
  switch (action.type) {
  case actions.TOGGLE_USER_SIDEBAR:
    return Object.assign({}, state, {
      userSidebarOpened: !state.userSidebarOpened,
    });

  case actions.TOGGLE_NEW_BOARD_FORM:
    return Object.assign({}, state, {
      forms: {
        ...state.forms,
        newBoardFormOpened: !state.forms.newBoardFormOpened,
      },
    });

  default:
    return state;
  }
};

export default general;
