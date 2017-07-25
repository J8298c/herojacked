import React from 'react';
import { Form } from 'semantic-ui-react';

const Input = (props) => (
  <Form.Field>
    <label className="appLabel" htmlFor={props.htmlFor}>{props.label}</label>
    <input
      className={props.className} type={props.type}
      onChange={props.onChange} name={props.name}
    />
  </Form.Field>
);

export default Input;
