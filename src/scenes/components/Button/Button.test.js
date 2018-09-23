import React from 'react';
import _ from 'lodash';
import { shallow } from 'enzyme/build';
import Button, { buttonTypes } from './Button';

const buttonContent = 'test button content';
const buttonClass = 'test-button-class';
const butttonFunction = () => {};

describe('<Button />', () => {
  it('renders properly', () => {
    const wrapper = shallow(
      <Button onClick={butttonFunction}>
        {buttonContent}
      </Button>
    );

    expect(wrapper.find('.to-button'))
      .toHaveLength(1);
  });

  it('gets class from props', () => {
    const wrapper = shallow(
      <Button
        className={buttonClass}
        onClick={butttonFunction}
      >
        {buttonContent}
      </Button>
    );

    expect(wrapper.find(`.${buttonClass}`))
      .toHaveLength(1);
  });

  it('is of given type', () => {
    _.map(buttonTypes, buttonType => {
      const wrapper = shallow(
        <Button
          className={buttonClass}
          onClick={butttonFunction}
          buttonType={buttonType}
        >
          {buttonContent}
        </Button>
      );

      expect(wrapper.find('.to-button')
        .hasClass(buttonType))
        .toBe(true);
    });
  });
});
