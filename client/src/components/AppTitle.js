import React from 'react';
import { Header } from 'semantic-ui-react';

const AppHeader = (props) => (
  <Header
    size={props.size}
  >
    {props.headerText}
  </Header>
);
export default AppHeader;

