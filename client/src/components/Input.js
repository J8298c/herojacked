import React from 'react';
import { Input, Form } from 'semantic-ui-react';

const Inputs = (props) => (
<Form.Field>
  <label htmlFor={props.name}>
    {props.labeltext}
  </label>
  <Input
    onChange={props.onChange} placeholder={props.placeholder} type={props.type}
    name={props.name}
  />
</Form.Field>
);
export default Inputs;
