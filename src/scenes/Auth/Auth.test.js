import React from 'react';
import { shallow } from 'enzyme';
import { Switch, Route } from 'react-router-dom';
import Auth from './Auth';

describe('<Auth />', () => {
  it('renders', () => {
    const wrapper = shallow(<Auth />);

    expect(wrapper.find('.auth-wrapper'))
      .toHaveLength(1);
  });

  it('renders switch with proper routes', () => {
    const wrapper = shallow(<Auth />);

    expect(wrapper.find(Switch)).toHaveLength(1);
    expect(wrapper.find(Route).at(0).props().path).toEqual('/auth/login');
    expect(wrapper.find(Route).at(1).props().path).toEqual('/auth/sign-up');
  });
});
