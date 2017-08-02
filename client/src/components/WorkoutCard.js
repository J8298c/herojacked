import React from 'react';
import { Card } from 'semantic-ui-react';

const WorkoutCard = (props) => (
  <Card
    image={props.image} header={props.header}
    meta={props.meta} description={props.description}
    extra={props.extra}
  />
);
export default WorkoutCard;
