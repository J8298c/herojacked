import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import AddWorkout from './AddWorkout';
import Input from '../Input';

describe('<AddWorkout />', () => {
  it('should render <AddWorkout />', () => {
    shallow(<AddWorkout />);
  });
  it('should render input fields in <AddWorkout />', () => {
    const wrapper = mount(<AddWorkout />);
    expect(wrapper.find(Input).length).toBe(4);
  });
});
