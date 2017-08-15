import React from 'react';
import { Item } from 'semantic-ui-react';

const AppItem = (props) => (
  <Item>
    <Item.Image
      src={props.imageSrc} 
    />
    <Item.Content>
      <Item.Header>{props.itemHeader}</Item.Header>
    </Item.Content>
  </Item>
);
export default AppItem;
