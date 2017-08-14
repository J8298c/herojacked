import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import AppIcon from '../AppIcon';
import AppTitle from '../AppTitle';
import AppButton from '../AppButton';
import sinon from 'sinon';
import LandingPage from './LandingPage';

describe('<LandingPage />', () => {
  it('should render the component without error', () => {
    const wrapper = mount(<LandingPage />);
    expect(wrapper.find(AppButton)).to.have.length(1);
    expect(wrapper.find(AppTitle)).to.have.length(1);
    expect(wrapper.find(AppIcon)).to.have.length(1);
  });
});
