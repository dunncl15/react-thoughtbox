import React from 'react';
import { shallow, mount } from 'enzyme';

import CreateThought from './createThought.js';

describe('CreateThought', () => {

  it('has two input fields', () => {
    const wrapper = shallow(
      <CreateThought />
    );

    expect(wrapper.find('input').length).toEqual(2);
  });

  it('fires an onChange event on user input which should update both state & the input field', () => {
    const wrapper = mount(<CreateThought/>);
    const input = wrapper.find('input').first();
    const expectedState = {
      title: 'abc',
      body: ''
    };
    input.simulate('change', { target: { value: 'abc' } });

    expect(input.node.value).toEqual('abc');
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('fires onChange on second input which should update both state & the input field', () => {
    const wrapper = mount(<CreateThought/>);
    const input = wrapper.find('input').last();
    const expectedState = {
      title: '',
      body: 'abc'
    };
    input.simulate('change', { target: { value: 'abc' } });

    expect(input.node.value).toEqual('abc');
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('has a submit button', () => {
    const wrapper = shallow(
      <CreateThought />
    );

    expect(wrapper.find('button').length).toEqual(1);
  });

  it.skip('fires submitIdea function with the data from state as an argument, and input fields go back to empty strings', () => {
    const mockedSubmit = jest.fn();
    const wrapper = mount(
      <CreateThought createThought={mockedSubmit} />
    );
    const expectedState = {
      title: '',
      body: ''
    };
    const title = wrapper.find('input').first();
    const body = wrapper.find('input').last();

    title.simulate('change', { target: { value: 'abc' } });
    expect(wrapper.state().title).toEqual('abc');

    body.simulate('change', { target: { value: 'def' } });
    expect(wrapper.state().body).toEqual('def');

    wrapper.find('button').simulate('click');

    expect(wrapper.state()).toEqual(expectedState);

    // What input field are we trying to target? What is the action we want to simulate?

    // Find the DOM element you want to click on and click on that thing

    // Expect that the value of the input node equals a string
  });



});
