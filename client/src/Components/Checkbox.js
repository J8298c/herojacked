import React from 'react';
import { Checkbox } from 'semantic-ui-react';

const Checkboxs = (props) => (
  <Checkbox
    label={props.label}
    checked={props.checked}
    value={props.label}
  />
);
export default Checkboxs;
