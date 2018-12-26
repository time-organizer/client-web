import React from 'react';
import { shallow } from 'enzyme';

import NewBoardButton from './NewBoardButton';

describe('<BoardsList />', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(
      <NewBoardButton onToggleNewBoardForm={() => {}} />
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.find('.board-list-item-wrapper').find('.new-board-button')).toHaveLength(1);
  });
});
