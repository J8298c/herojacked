import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Button } from 'semantic-ui-react';
import sinon from 'sinon';
import LandingPage from './LandingPage';

describe('<LandingPage />', () => {
  it('should render the component without error', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.find(Button)).to.have.length(1);
  });
});
