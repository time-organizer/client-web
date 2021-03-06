import React from 'react';
import { shallow } from 'enzyme';

import Input from './BorderInput';

const inputName = 'test-input-name';
const className = 'test-input-className';
const inputChangeFunction = () => {
};

describe('<Input />', () => {
  it('renders properly', () => {
    const wrapper = shallow(
      <Input
        name={inputName}
        onChange={inputChangeFunction}
      />
    );

    expect(wrapper.find('.border-input-wrapper'))
      .toHaveLength(1);
  });

  it('gets given className', () => {
    const wrapper = shallow(
      <Input
        name={inputName}
        onChange={inputChangeFunction}
        className={className}
      />
    );

    expect(wrapper.find('.border-input-wrapper').hasClass(className)).toBe(true);
  });
});
