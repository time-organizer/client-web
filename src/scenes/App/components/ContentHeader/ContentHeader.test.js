import React from 'react';
import { shallow } from 'enzyme';

import ContentHeader from './ContentHeader';

const props = {
  headerName: 'testHeaderName',
};

describe('<ContentHeader />', () => {
  it('renders <ContentHeader /> without crashing', () => {
    const wrapper = shallow(
      <ContentHeader headerName={props.headerName} />
    );
    expect(wrapper.find('.content-header')).toHaveLength(1);
  });

  it('renders headerName prop', () => {
    const wrapper = shallow(
      <ContentHeader headerName={props.headerName} />
    );
    expect(wrapper.find('h1').text()).toEqual(props.headerName);
  })
});
