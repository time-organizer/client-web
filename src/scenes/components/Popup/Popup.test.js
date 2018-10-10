import React from 'react';
import { mount } from 'enzyme';
import { CSSTransition } from 'react-transition-group';

import Popup from './Popup';
import Portal from '../../components/Portal';

describe('<Popup />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(
      <Popup onClose={() => {}}>
        <div className="child" />
        <div className="child" />
        <div className="child" />
        <div className="child" />
      </Popup>
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.find(Portal)).toHaveLength(1);
  });

  it('renders children', () => {
    expect(wrapper.find('.child')).toHaveLength(4);
  });

  it('renders CSSTransition for popup-overlay', () => {
    const overlayCSSTransition = wrapper.find(CSSTransition).at(0);

    expect(wrapper.find('.popup-overlay')).toHaveLength(1);
    expect(overlayCSSTransition.props().classNames).toEqual('fade');
    expect(overlayCSSTransition.props().in).toEqual(true);
  });

  it('renders CSSTransition for popup', () => {
    const popupCSSTransition = wrapper.find(CSSTransition).at(1);
    expect(wrapper.find('.popup')).toHaveLength(1);
    expect(popupCSSTransition.props().classNames).toEqual('popup-transition');
    expect(popupCSSTransition.props().in).toEqual(true);
  });

  it('closes when <CloseButton /> is clicked', () => {
    const wrapperForSimulation = mount(
      <Popup
        onClose={() => {}}
      />
    );

    wrapperForSimulation.find('.close-button').simulate('click');
    const overlayCSSTransition = wrapperForSimulation.find(CSSTransition).at(0);
    const popupCSSTransition = wrapperForSimulation.find(CSSTransition).at(1);

    expect(overlayCSSTransition.props().in).toEqual(false);
    expect(popupCSSTransition.props().in).toEqual(false);
  });

  it('closes when <div className=".popup-overlay"/> is clicked', () => {
    const wrapperForSimulation = mount(
      <Popup
        onClose={() => {}}
      />
    );

    wrapperForSimulation.find('.popup-overlay').simulate('click');
    const overlayCSSTransition = wrapperForSimulation.find(CSSTransition).at(0);
    const popupCSSTransition = wrapperForSimulation.find(CSSTransition).at(1);

    expect(overlayCSSTransition.props().in).toEqual(false);
    expect(popupCSSTransition.props().in).toEqual(false);
  });
});
