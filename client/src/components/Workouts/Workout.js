import React from 'react';
import AppButton from '../Sematic/Button';

export default function Workout(props) {
  return (
    <div>
      <h1 className="workout-title">{props.name}</h1>
      <h5 className="workout-reps">{props.reps}</h5>
      <h5 className="workout-sets">{props.sets}</h5>
      <AppButton className="workoutBtn" text="Workout" />
    </div>
  );
}
