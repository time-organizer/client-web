import React from 'react';
import { shallow } from 'enzyme';

import Boards from './Boards';
import ContentLayout from '../../components/ContentLayout';
import ContentHeader from '../../components/ContentHeader';
import Content from '../../components/Content';
import BoardsListContainer from './components/BoardsList/BoardsListContainer';
import NewBoardFormContainer from './components/NewBoardForm/NewBoardFormContainer';

describe('<Boards />', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(
      <Boards newBoardFormOpened={true} />
    );
  });

  it('renders <ContentLayout /> without crashing', () => {
    expect(wrapper.find(ContentLayout)).toHaveLength(1);
  });

  it('renders <ContentHeader /> with proper props', () => {
    expect(wrapper.find(ContentHeader)).toHaveLength(1);
    expect(wrapper.find(ContentHeader).props().headerName).toEqual('Boards');
  });


  it('renders <Content /> with <BoardsListContainer />', () => {
    expect(wrapper.find(Content).find(BoardsListContainer)).toHaveLength(1);
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
