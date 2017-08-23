import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Button } from 'semantic-ui-react';
import sinon from 'sinon';
import AppButton from './AppButton';

describe('<AppButton />', () => {
  it('should render the appbutton correctly', () => {
    const appButton = mount(<AppButton />);
    expect(appButton.find(Button)).to.have.length(1);
  });
  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const appButton = mount((<AppButton onClick={onButtonClick} />));
    appButton.find('Button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});
