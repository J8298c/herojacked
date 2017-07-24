import React from 'react';
import { shallow } from 'enzyme';
import PageHeader from './PageHeader';

describe('<PageHeader />', () => {
  it('should render the <PageHeader /> without errors', () => {
    shallow(<PageHeader />);
  });
});
