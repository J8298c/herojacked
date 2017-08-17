import React from 'react';
import { Card } from 'semantic-ui-react';
import WorkoutCard from '../WorkoutCard';
import weights from '../../images/weights-icon.svg';

const ProfileFavorites = () => {
  const workoutProps = [{ name: 'bench press', bodyPart: 'chest', id: 1 }, { name: 'Squats', bodyPart: 'Legs', id: 2 }];
  const userFavs = workoutProps.map((fav) => (
    <WorkoutCard
      image={weights} cardheader={fav.name} cardmeta={fav.bodyPart}
      buttontext="Go to Workout" key={fav.id}
    />
  ));
  return (
    <Card.Group itemsPerRow={2}>
      {userFavs}
    </Card.Group>
  );
};
export default ProfileFavorites;

