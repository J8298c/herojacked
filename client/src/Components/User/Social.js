import React from 'react';

const Social = (props) => (
    <ul>
      <li>{props.friends}</li>
      <li>{props.messages}</li>
      <li>{props.request}</li>
    </ul>
);

export default Social;
