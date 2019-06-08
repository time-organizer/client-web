export const TOGGLE_USER_SIDEBAR = 'TOGGLE_USER_SIDEBAR';
export const toggleUserSidebar = () => ({
  type: TOGGLE_USER_SIDEBAR,
});

export const TOGGLE_MENU_SIDEBAR = 'TOGGLE_MENU_SIDEBAR';
export const toggleMenuSidebar = () => ({
  type: TOGGLE_MENU_SIDEBAR,
});

export const TOGGLE_NEW_BOARD_FORM = 'TOGGLE_NEW_BOARD_FORM';
export const toggleNewBoardForm = () => ({
  type: TOGGLE_NEW_BOARD_FORM,
});

export const SWITCH_ON_COLUMN_EDITOR = 'SWITCH_ON_COLUMN_EDITOR';
export const switchOnColumnEditor = columnId => ({
  type: SWITCH_ON_COLUMN_EDITOR,
  columnId,
});

export const SWITCH_OFF_COLUMN_EDITOR = 'SWITCH_OFF_COLUMN_EDITOR';
export const switchOffColumnEditor = () => ({
  type: SWITCH_OFF_COLUMN_EDITOR,
});

export const TOGGLE_NEW_LABEL_FORM = 'TOGGLE_NEW_LABEL_FORM';
export const toggleNewLabelForm = () => ({
  type: TOGGLE_NEW_LABEL_FORM,
});
