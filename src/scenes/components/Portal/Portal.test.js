import React from 'react';
import { mount } from 'enzyme';

import Portal from './Portal';

describe('<Portal/>', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <Portal>
        children
      </Portal>
    );

    expect(wrapper.find(Portal)).toHaveLength(1);
    expect(wrapper.find(Portal).contains('children')).toBe(true);
  });
});
