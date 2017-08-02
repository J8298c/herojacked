import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const LabelButton = (props) => (
  <Button
    color={props.color} content={props.content}
    icon={props.icon}
    label={props.labelObj}
  />
);

export default LabelButton;
