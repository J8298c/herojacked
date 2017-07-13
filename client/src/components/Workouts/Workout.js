import React from 'react';

export default function Workout(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h5>{props.reps}</h5>
      <h5>{props.sets}</h5>
    </div>
  );
}
