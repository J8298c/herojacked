import React from 'react';
import { Card } from 'semantic-ui-react';

const AppCard = (props) => (
    <Card 
      color={props.color} image={props.image} header={props.header}
      meta={props.meta} description={props.description} extra={props.extra}
      key={props.itemKey}
    />
);
export default AppCard;

