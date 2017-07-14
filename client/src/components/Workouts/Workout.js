import React from 'react';

export default function Workout(props) {
  return (
    <div>
      <h1 className="workout-title">{props.name}</h1>
      <h5 className="workout-reps">{props.reps}</h5>
      <h5 className="workout-sets">{props.sets}</h5>
    </div>
  );
}
