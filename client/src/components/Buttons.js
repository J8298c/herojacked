import React from 'react';
import { Button } from 'semantic-ui-react';

const Buttons = (props) => (
  <Button
    color={props.color} onClick={props.onClick} content={props.content}
  />
);
export default Buttons;
