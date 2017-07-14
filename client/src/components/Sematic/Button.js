import React from 'react'
import { Button } from 'semantic-ui-react';

const AppButton = (props) => (
  <Button className={props.className} onClick={props.onClick}>
    { props.text }
  </Button>
);

export default AppButton;
