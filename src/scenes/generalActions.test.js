import * as actions from './generalActions';

describe('general action creators', () => {
  it(`returns proper action for toggleUserSidebar`, () => {
    const expected = {
      type: actions.TOGGLE_USER_SIDEBAR,
    };

    expect(actions.toggleUserSidebar())
      .toEqual(expected);
  });

  it(`returns proper action for toggleUserSidebar`, () => {
    const expected = {
      type: actions.TOGGLE_NEW_BOARD_FORM,
    };
    expect(actions.toggleNewBoardForm())
      .toEqual(expected);
  });

  it('returns proper action for switchOnColumnEditor', () => {
    const columnId = 'testID';
    const expected = {
      type: actions.SWITCH_ON_COLUMN_EDITOR,
      columnId,
    };

    expect(actions.switchOnColumnEditor(columnId)).toEqual(expected);
  });

  it('returns proper action for switchOffColumnEditor', () => {
    const expected = {
      type: actions.SWITCH_OFF_COLUMN_EDITOR,
    };

    expect(actions.switchOffColumnEditor()).toEqual(expected)
  })
});
