import React from 'react';
import { Card } from 'semantic-ui-react';

const WorkoutCard = (props) => (
  <Card>
    <Card.content>
      <Card.header>{props.name}</Card.header>
      <Card.description>{props.sets}</Card.description>
      <Card.description>{props.reps}</Card.description>
    </Card.content>
  </Card>
);
export default WorkoutCard;
