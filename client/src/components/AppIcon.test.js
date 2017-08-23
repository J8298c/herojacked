import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Image } from 'semantic-ui-react';
import AppIcon from './AppIcon';

describe('<AppIcon />', () => {
  it('should render the appIcon component', () => {
    const appIcon = mount(<AppIcon />); 
    expect(appIcon.find(Image)).to.have.length(1);
  });
});
