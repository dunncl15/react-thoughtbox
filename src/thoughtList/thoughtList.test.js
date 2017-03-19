import React from 'react';
import { shallow, mount } from 'enzyme';

import ThoughtList from './thoughtList.js';
import ThoughtCard from '../thoughtCard/thoughtCard';

describe('ThoughtList', () => {

  it('has a thoughtList class field', () => {
    const wrapper = shallow(<ThoughtList />);

    expect(wrapper.find('.ThoughtList').length).toEqual(1);
  });

  it('has multiple ThoughtCard class fields', () => {
    const wrapper = shallow(<ThoughtList />);

    expect(wrapper.find(ThoughtCard).length).toEqual(3);
  });

});
