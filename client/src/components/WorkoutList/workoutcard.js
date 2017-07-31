import React from 'react';
import { Card } from 'semantic-react-ui';

const WorkoutCard = (props) => (
  <Card 
    image={props.image} header={props.header} meta={props.meta} description={props.description} extra={extra}
  />
);

export default WorkoutCard;

