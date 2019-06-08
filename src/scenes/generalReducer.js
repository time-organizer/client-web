import * as actions from './generalActions';

export const initialState = {
  fullscreenLoading: false,
  userSidebarOpened: false,
  menuSidebarOpened: false,
  forms: {
    newBoardFormOpened: false,
    newLabelFormOpened: false,
  },
  editors: {
    columnId: null,
  },
};

const general = (state = initialState, action) => {
  switch (action.type) {
  case actions.TOGGLE_USER_SIDEBAR:
    return Object.assign({}, state, {
      userSidebarOpened: !state.userSidebarOpened,
    });

  case actions.TOGGLE_MENU_SIDEBAR:
    return Object.assign({}, state, {
      menuSidebarOpened: !state.menuSidebarOpened,
    });

  case actions.TOGGLE_NEW_BOARD_FORM:
    return Object.assign({}, state, {
      forms: {
        ...state.forms,
        newBoardFormOpened: !state.forms.newBoardFormOpened,
      },
    });

  case actions.SWITCH_ON_COLUMN_EDITOR: {
    return Object.assign({}, state, {
      editors: {
        ...state.editors,
        columnId: action.columnId,
      },
    });
  }

  case actions.SWITCH_OFF_COLUMN_EDITOR: {
    return Object.assign({}, state, {
      editors: {
        columnId: null,
      },
    });
  }

  case actions.TOGGLE_NEW_LABEL_FORM: {
    return Object.assign({}, state, {
      forms: {
        ...state.forms,
        newLabelFormOpened: !state.forms.newLabelFormOpened,
      },
    });
  }

  default:
    return state;
  }
};

export default general;
