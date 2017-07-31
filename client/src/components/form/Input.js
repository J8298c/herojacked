import React from 'react';
import { Input } from 'semantic-ui-react';

const FormInput = (props) => (
  <Input 
    className={props.className} onChange={props.onChange} placeholder={props.placeholder}
    icon={props.icon} focus={props.focus} fluid={props.fluid} type={props.type}
  />
);

export default FormInput;
