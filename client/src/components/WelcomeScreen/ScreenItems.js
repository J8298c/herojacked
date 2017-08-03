import React from 'react';
import { Icon } from 'semantic-ui-react';

const ScreenItems = (props) => (
  <div>
    <Icon
      name={props.name}
      size="massive"
    />
    <p>{props.iconHeader}</p>
  </div>
);

export default ScreenItems;
