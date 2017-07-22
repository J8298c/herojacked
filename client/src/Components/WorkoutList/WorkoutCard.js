import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const WorkoutCard = (props) => {
  const extra = (
  <a>
    <Icon name='star' />
  </a>
);
  const workoutRatings = [];
  for (let i = 0; i < props.rating; i++) {
    workoutRatings.push(extra);
  }
  return (
    <Card
      header={props.name} meta={props.bodyPart} extra={workoutRatings}
    />
  );
};
export default WorkoutCard;
