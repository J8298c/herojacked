import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
    <Link to={`/workout/${props.name}`}><Card
      header={props.name} meta={props.bodyPart} extra={workoutRatings} key={props.itemKey}
      image={require('../../images/weights-icon.svg')}
    /></Link>
  );
};
export default WorkoutCard;
