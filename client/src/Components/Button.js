import React from 'react';
import { Button } from 'semantic-ui-react';

const AppButton = (props) => (
  <Button
    content={props.content} className={props.className} onClick={props.onClick}
  />
);
export default AppButton;
