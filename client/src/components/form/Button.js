import React from 'react';
import { Button } from 'semantic-ui-react';

const FormButton = (props) => (
  <Button 
    className={props.className} onClick={props.onClick} label={props.label}
  />
);

export default FormButton;
