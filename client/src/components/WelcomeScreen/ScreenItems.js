import React from 'react';
import { Icon, Grid } from 'semantic-ui-react';

const ScreenItems = (props) => (
  <Grid.Column className="icondiv">
    <Icon
      name={props.name}
      size="massive"
      className="icon"
    />
    <p>{props.iconHeader}</p>
  </Grid.Column>
);

export default ScreenItems;
