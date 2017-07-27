import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AppCard from '../Card';

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
    <Link to={`/workout/${props.name}`} className="card-link"><AppCard
      header={props.name} meta={props.bodyPart} key={props.itemKey} color="violet"
      image={require('../../images/weights-icon.svg')}
    /></Link>
  );
};
export default WorkoutCard;
