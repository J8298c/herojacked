import React from 'react';
import { Button } from 'semantic-ui-react';

const LabelButton = (props) => (
  <Button
    className={props.className} color={props.color}
    content={props.content} icon={props.icon}
    label={props.label} onClick={props.onClick}
  />
);

export default LabelButton;
