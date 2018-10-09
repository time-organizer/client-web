import React from 'react';
import { shallow } from 'enzyme';

import BoardsList from './BoardsList';
import NewBoardButton from '../NewBoardButton';

describe('<BoardsList />', () => {
  it('renders without crashing', () =>{
    const wrapper = shallow(<BoardsList />);

    expect(wrapper.find('.boards-list')).toHaveLength(1);
  });

  it('renders <NewBoardButton />', () => {
    const wrapper = shallow(<BoardsList />);

    expect(wrapper.find(NewBoardButton)).toHaveLength(1);
  })
});
