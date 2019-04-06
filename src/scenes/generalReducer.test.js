import generalReducer, { initialState } from './generalReducer';
import * as actions from './generalActions';

describe('general reducer', () => {
  it(`returns proper values for ${actions.TOGGLE_USER_SIDEBAR} action`, () => {
    const action = {
      type: actions.TOGGLE_USER_SIDEBAR,
    };

    expect(initialState.userSidebarOpened).toEqual(false);
    const result = generalReducer(initialState, action);
    expect(result.userSidebarOpened).toEqual(true);
  });

  it(`returns proper values for ${actions.TOGGLE_NEW_BOARD_FORM} action`, () => {
    const action = {
      type: actions.TOGGLE_NEW_BOARD_FORM,
    };

    expect(initialState.forms.newBoardFormOpened).toEqual(false);
    const result = generalReducer(initialState, action);
    expect(result.forms.newBoardFormOpened).toEqual(true);
  });

  it(`returns proper values for ${actions.SWITCH_OFF_COLUMN_EDITOR} action`, () => {
    const action = {
      type: actions.SWITCH_ON_COLUMN_EDITOR,
      columnId: 'testID',
    };
    expect(initialState.editors.columnId).toEqual(null);
    const result = generalReducer(initialState, action);
    expect(result.editors.columnId).toEqual(action.columnId);
  });
});
