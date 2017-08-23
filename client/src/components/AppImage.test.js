import React from 'react';
import { Image } from 'semantic-ui-react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import AppImage from './AppImage';

describe('<AppImage />', () => {
  it('should render AppImage without breaking', () => {
    const appImage = mount(<AppImage />);
    expect(appImage.find(Image)).to.have.length(1);
  });
});
