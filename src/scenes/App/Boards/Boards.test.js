import React from 'react';
import { shallow } from 'enzyme';
import { Switch, Route } from 'react-router-dom';

import Boards from './Boards';
import NewBoardFormContainer from './New/NewBoardForm/NewBoardFormContainer';

describe('<Boards />', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(
      <Boards newBoardFormOpened={true} />
    );
  });

  it('renders <Switch />  without crashing', () => {
    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it('renders <Route /> for List and Workspace', () => {
    expect(wrapper.find(Route)).toHaveLength(3);
    expect(wrapper.find(Route).at(0).props().path)
      .toEqual('/boards/:id/:taskId');
    expect(wrapper.find(Route).at(1).props().path)
      .toEqual('/boards/:id');
    expect(wrapper.find(Route).at(2).props().path)
      .toEqual('/boards/');
  });

  it('renders <NewBoardFormContainer /> when newBoardFormOpened is true', () => {
    expect(wrapper.find(NewBoardFormContainer)).toHaveLength(1);
  });

  it('does not render <NewBoardContainer /> when newBoardFormOpened is false', () =>{
    const wrapperWithFalsyFormOpened = shallow(
      <Boards newBoardFormOpened={false} />
    );

    expect(wrapperWithFalsyFormOpened.find(NewBoardFormContainer)).toHaveLength(0);
  });
});
