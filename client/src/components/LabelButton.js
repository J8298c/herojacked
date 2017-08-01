import React from 'react';
import { Button, Icon } from 'semantic-react-ui';

const LabelButton = (props) => (
  <Button
    color={props.color} content={props.content}
    icon={props.icon}
    label={props.labelObj}
  />
);

export default LabelButton;
