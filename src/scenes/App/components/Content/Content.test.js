import React from 'react';
import { shallow } from 'enzyme';

import Content from './Content';

describe('<Content />', () => {
  it('renders <Content /> without crashing', () => {
    const wrapper = shallow(
      <Content />
    );
    expect(wrapper.find('.content')).toHaveLength(1);
  });

  it('renders children', () => {
    const wrapper = shallow(
      <Content>
        <div className="child" />
      </Content>
    );

    expect(wrapper.find('.child')).toHaveLength(1);
  });
});
