import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Item } from 'semantic-ui-react';
import AppItem from './AppItem';

describe('<AppItem />', () => {
  it('should render without error', () => {
    const appItem = mount(<AppItem />);
    expect(appItem.find(Item)).to.have.length(1);
  });
});
