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
});
