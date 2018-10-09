import React from 'react';
import { shallow } from 'enzyme';

import NewBoardForm from './NewBoardForm';
import Popup from '../../../../../components/Popup';

describe('<NewBoardForm />', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(
      <NewBoardForm onToggleNewBoardForm={() => {}} />
    );
  });

  it('it renders without crashing', () => {
    expect(wrapper.find(Popup)).toHaveLength(1);
  });

  it('renders popup with proper props', () => {
    expect(wrapper.find(Popup).props().title).toEqual('Create new board');
    expect(wrapper.find(Popup).props().popupType).toEqual('normal');
    expect(wrapper.find(Popup).props().withCloseButton).toEqual(true);
  })
});
